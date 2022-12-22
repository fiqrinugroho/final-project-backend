const { passenger, } = require("../models");

const create = (newPassenger) => {
  return passenger.create(newPassenger);
};
const getById = (id) => {
  return passenger.findOne({
    where: {
      id,
    },
  });
};

const updatePassenger = async (reqBody, id) => {
  return await passenger.update(reqBody, { where: { id, }, });
};

const deletePassenger = async (id) => {
  return await passenger.destroy({ where: { id, }, });
};

module.exports = {
  create,
  getById,
  updatePassenger,
  deletePassenger,
};
