const { user, profile, role, } = require("../models");

const getUserById = (id) => {
  return user.findOne({
    where: {
      id,
    },
    include: {
      model: profile,
    },
  });
};
// untuk mencari data user dan profile
const findUser = (id) => {
  // cari user berdasarkan id
  const find = user.findOne({
    where: {
      id,
    },
    include: [
      {
        model: profile,
      },
      {
        model: role,
      },
    ],
  });
  return find;
};

const updateProfile = async (reqBody, id) => {
  return await profile.update(reqBody, { where: { id, }, });
};

const updateUser = async (reqBody, id) => {
  return await user.update(reqBody, { where: { id, }, });
};

const deleteUser = async (id) => {
  return await profile.destroy({ where: { id, }, });
};

module.exports = {
  getUserById,
  updateUser,
  updateProfile,
  deleteUser,
  findUser,
};
