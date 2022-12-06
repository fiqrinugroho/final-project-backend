const { user, profile } = require("../models");

// const getUser = () => {
//   return user.findAll();
// };

// untuk mencari data user dan profile
// const getUserById = (id) => {
//   // cari user berdasarkan email
//   const find = profile.findOne({
//     where: {
//       id,
//     },
//     include: [
//       {
//         model: profile,
//       },
//     ],

//   });
//   return find;
// };

const getUserById = (id) => {
  return profile.findOne({
    where: {
      id,
    },
  });
};

const updateUser = async (reqBody, id) => {
  return await profile.update(reqBody, { where: { id } });
};

module.exports = {
  getUserById,
  updateUser,
};
