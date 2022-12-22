const { passenger, } = require("../models");

const create = (newPassenger) => {
  return passenger.create(newPassenger);
};

module.exports = {
  create,
};
