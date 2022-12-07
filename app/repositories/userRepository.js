const { profile } = require("../models");

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

const deleteUser = async (id) => {
  return await profile.destroy({ where: { id } });
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
};
