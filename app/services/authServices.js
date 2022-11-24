const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const authRepository = require('../repositories/authRepository');


const registerNewUser = async (reqBody) => {
    const { firstName,lastName, email, password } = reqBody;

    // validasi data yang kosong
    if (!email) throw new ApiError(httpStatus.BAD_REQUEST, "email cannot be empty");
    if (!firstName) throw new ApiError(httpStatus.BAD_REQUEST, "first Name cannot be empty");
    if (!lastName) throw new ApiError(httpStatus.BAD_REQUEST, "last Name cannot be empty");
    if (!password) throw new ApiError(httpStatus.BAD_REQUEST, "password cannot be empty");
  
    const user = await authRepository.findEmail(email);
    if (user) {
        throw new ApiError(httpStatus.BAD_REQUEST, `user with email : ${email} already taken`)
    }
     // validasi minimum password length
     const passswordLength = password.length >= 8
     if (!passswordLength) {
         throw new ApiError(httpStatus.BAD_REQUEST, "minimum password length must be 8 charater or more")
     }

    const hash = bcrypt.hashSync(password, 10);
    const createUser = { 
      firstName,
      lastName,
      email,
      password: hash
    }
    await authRepository.createUser(createUser);
    const newUser = await authRepository.findEmail(email);
    const token = jwt.sign({
        id: newUser.id,
        name: newUser.nama,
        email: newUser.email,
        roleId: newUser.roleId,
    }, 'rahasia')

    return {
            id: newUser.id,
            name: newUser.nama,
            email: newUser.email,
            roleId: newUser.roleId,
            role : newUser.role.name,
            token
            }
}
// to do inttal jwt, buat routing, buat profile
module.exports = {
    // login,
    registerNewUser,
}