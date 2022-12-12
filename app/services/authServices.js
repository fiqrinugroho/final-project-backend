const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const authRepository = require("../repositories/authRepository");
const { JWT_SIGNATURE_KEY, } = require("../../config/application");

const login = async (reqBody) => {
  const { email, password, } = reqBody;
  const user = await authRepository.findUser(email);

  // gagal melanjutkan karena username nya tidak ada
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "user not found");
  }
  // check password user, jika success login dapat response yang isinya TOKEN
  const isPasswordCorrect = verifyPassword(password, user.password);
  if (user && isPasswordCorrect) {
    const accessToken = createToken(user);
    return {
      id: user.id,
      name: user.firstName,
      email: user.email,
      roleId: user.roleId,
      role: user.role.roleName,
      accessToken,
    };
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "The password you entered is incorrect"
    );
  }
};

const registerNewUser = async (reqBody) => {
  const { firstName, lastName, email, password, } = reqBody;

  // validasi data yang kosong
  if (!email)
    throw new ApiError(httpStatus.BAD_REQUEST, "email cannot be empty");
  if (!firstName)
    throw new ApiError(httpStatus.BAD_REQUEST, "first name cannot be empty");
  // if (!lastName) throw new ApiError(httpStatus.BAD_REQUEST, "last name cannot be empty");
  if (!password)
    throw new ApiError(httpStatus.BAD_REQUEST, "password cannot be empty");

  const user = await authRepository.findEmail(email);
  if (user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "email already exists");
  }
  // validasi minimum password length
  const passswordLength = password.length >= 8;
  if (!passswordLength) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "minimum password length must be 8 charater or more"
    );
  }

  const hash = encryptPassword(password);
  const createUser = {
    firstName,
    lastName,
    email,
    password: hash,
  };
  // membuat user
  await authRepository.createUser(createUser);
  // mencari user yang baru dibuat
  const newUser = await authRepository.findEmail(email);
  // menyatukan first & last name menjadi fullname
  const fullName = firstName + " " + lastName;
  // membuat profile dengan userId user
  await authRepository.addProfile(newUser.id, fullName);

  const accessToken = createToken(newUser);
  return {
    id: newUser.id,
    name: newUser.firstName,
    email: newUser.email,
    roleId: newUser.roleId,
    role: newUser.role.roleName,
    accessToken,
  };
};

const createToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.firstName,
      email: user.email,
      roleId: user.roleId,
    },
    JWT_SIGNATURE_KEY
  );
};

// const decodeToken = (token) => {
//   return jwt.verify(token, JWT_SIGNATURE_KEY);
// };

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const verifyPassword = (password, encryptedPassword) => {
  return bcrypt.compareSync(password, encryptedPassword);
};

const loginAdmin = async (reqBody) => {
  const { email, password, } = reqBody;
  const user = await authRepository.findUser(email);

  // gagal melanjutkan karena username nya tidak ada
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "user not found");
  }
  // check password user, jika success login dapat response yang isinya TOKEN
  const isPasswordCorrect = verifyPassword(password, user.password);
  if (user && isPasswordCorrect) {
    if (user.roleId === 1) {
      const accessToken = createToken(user);
      return {
        id: user.id,
        name: user.firstName,
        email: user.email,
        roleId: user.roleId,
        role: user.role.roleName,
        accessToken,
      };
    } else {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Only Admin Can Access This Page"
      );
    }
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "The password you entered is incorrect"
    );
  }
};

module.exports = {
  login,
  registerNewUser,
  loginAdmin,
};
