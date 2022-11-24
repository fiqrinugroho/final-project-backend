const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const authRepository = require('../repositories/authRepository');

// const registerNewUser = async (reqBody) => {
//     const { firstName,lastName, email, password } = reqBody;

//     // validasi data yang kosong
//     if (!email) throw new ApiError(httpStatus.BAD_REQUEST, "email cannot be empty");
//     if (!firstName) throw new ApiError(httpStatus.BAD_REQUEST, "first Name cannot be empty");
//     if (!lastName) throw new ApiError(httpStatus.BAD_REQUEST, "last Name cannot be empty");
//     if (!password) throw new ApiError(httpStatus.BAD_REQUEST, "password cannot be empty");
  
//     const user = await authRepository.findEmail(email);
//     if (user) {
//         throw new ApiError(httpStatus.BAD_REQUEST, `user with email : ${email} already taken`)
//     }
//      // validasi minimum password length
//      const passswordLength = password.length >= 8
//      if (!passswordLength) {
//          throw new ApiError(httpStatus.BAD_REQUEST, "minimum password length must be 8 charater or more")
//      }

//     const hash = bcrypt.hashSync(password, 10);
//     const createUser = { 
//       firstName,
//       lastName,
//       email,
//       password: hash
//     }
//     await authRepository.createUser(createUser);
//     const newUser = await authRepository.findEmail(email);
    //    const fullName = firstName + lastName;
    //    await authRepository.addProfile(newUser.id, fullName );
//     const token = jwt.sign({
//         id: newUser.id,
//         name: newUser.fristName,
//         email: newUser.email,
//         roleId: newUser.roleId,
//     }, 'rahasia')

//     return {
//             id: newUser.id,
//             name: newUser.fristName,
//             email: newUser.email,
//             roleId: newUser.roleId,
//             role : newUser.role.name,
//             token
//             }
// }

const login = async (reqBody) => {
    const { email, password } = reqBody
    const user = await authRepository.findUser(email);
    console.log(user)

    // gagal melanjutkan karena username nya tidak ada 
    if (!user) {
        console.log("jalan")
        throw new ApiError(httpStatus.NOT_FOUND, `user with email : ${email} is not found`)
    }
    // check password user, jika success login dapat response yang isinya TOKEN
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({
            id: user.id,
            name: user.profile.fullName,
            email: user.email,
            roleId: user.roleId,
        }, 'rahasia')

        return {
                id: user.id,
                name:user.profile.fullName,
                email: user.email,
                roleId: user.roleId,
                role : user.role.roleName,
                token
                }
    }else {
        throw new ApiError(httpStatus.BAD_REQUEST, "The password you entered is incorrect");
    }
};

module.exports = {
    login,
    // registerNewUser,
}