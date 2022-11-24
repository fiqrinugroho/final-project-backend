// import models
const { users, role } = require('../models')

// create new user
const createUser = (createArgs) => {
  return users.create(createArgs);
}

// untuk mencari data sesuai dengan email user
const findEmail = (email) => {
    // cari user berdasarkan email
    const user = users.findOne({
        where: {
          email,
        },
        include: {
          model: role,
        }
      });
    return user
}



module.exports = {
    createUser,
    findEmail,
}