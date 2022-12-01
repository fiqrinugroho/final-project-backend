// import models
const { user, role, profile } = require('../models')

// membuat user baru
const createUser = (createArgs) => {
  return user.create(createArgs);
}

// untuk mencari data sesuai dengan email user
const findEmail = (email) => {
    // cari user berdasarkan email
    const find = user.findOne({
        where: {
          email,
        },
        include: {
          model: role,
        }
      });
    return find
}

// untuk mencari data user dan profile
const findUser = (email) => {
    // cari user berdasarkan email
    const find = user.findOne({
        where: {
          email,
        },
        include: [{
          model: profile,
        },
        {
          model: role,
        }]
      });
    return find
}

const addProfile = (userId, fullName) => {
  return profile.create({ fullName, userId})
}

module.exports = {
    createUser,
    findEmail,
    addProfile,
    findUser,
}