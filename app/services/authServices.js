const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const authRepository = require('../repositories/authRepository');

const login = async (reqBody) => {
    const { email, password } = reqBody
    const user = await authRepository.findUser(email);

    // gagal melanjutkan karena username nya tidak ada 
    if (!user) {
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
}