const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const userRepository = require("../repositories/userRepository");
const imagekit = require("../../lib/imagekit");

const getUserById = async (id) => {
  const user = await userRepository.findUser(id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, `user not found`);
  } else {
    await userRepository.updateUser(id);
    const getUser = await userRepository.findUser(id);

    return {
      id: getUser.id,
      firstName: getUser.firstName,
      lastName: getUser.lastName,
      address: getUser.profile.address,
      phoneNumber: getUser.profile.phoneNumber,
      avatar: getUser.profile.avatar,
      gender: getUser.profile.gender,
      createdAt: getUser.profile.createdAt,
      updatedAt: getUser.profile.updatedAt,
    };
  }
};

const updateUser = async (reqBody, file, id) => {
  const { firstName, lastName, address, phoneNumber, gender } = reqBody;
  
  const getUser = await userRepository.findUser(id);

    if (!getUser) {
      throw new ApiError(httpStatus.NOT_FOUND, `user not found`);
    }

  if (!file) {
    const user = { firstName, lastName };
    const fullName = firstName + " " + lastName;
    const profile = { fullName, address, phoneNumber, gender };
    await userRepository.updateUser(user, id);
    await userRepository.updateProfile(profile, id);
    
  } else {
    const validFormat = 
      file.mimetype == "image/png" || 
      file.mimetype == "image/jpg" || 
      file.mimetype == "image/jpeg";
    if (!validFormat) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Wrong Image Format");
    }
    // untuk memisahkan nama file dengan extensifilenya
    const split = file.originalname.split(".");
    const ext = split[split.length - 1];

    // upload file ke imagekit
    const img = await imagekit.upload({
      file: file.buffer, //required
      fileName: `IMG-${Date.now()}.${ext}`, //required
    });

    const user = { firstName, lastName };
    const fullName = firstName + " " + lastName;
    const profile = { 
      fullName,
      address,
      phoneNumber,
      avatar: img.url,
      gender,
    };
    await userRepository.updateUser(user, id);
    await userRepository.updateProfile(profile, id);

    
  }
  const getNewUser = await userRepository.findUser(id);

  return {
    id: getNewUser.id,
    firstName: getNewUser.firstName,
    lastName: getNewUser.lastName,
    address: getNewUser.profile.address,
    phoneNumber: getNewUser.profile.phoneNumber,
    avatar: getNewUser.profile.avatar,
    gender: getNewUser.profile.gender,
    createdAt: getNewUser.profile.createdAt,
    updatedAt: getNewUser.profile.updatedAt,
  };
};

const deleteUser = async (id) => {
  const user = await userRepository.getUserById(id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, `user not found`);
  } else {
    return await userRepository.deleteUser(id);
  }
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
};
