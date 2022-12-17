const { airplane, company, } = require("../models");

// untuk mencari data sesuai dengan nama airplane
const findAirplane = (airplaneName) => {
  // cari berdasarkan nama airplane
  const find = airplane.findOne({
    where: {
      airplaneName,
    },
    attributes: { exclude: ["seatCapacity",], },
    include: {
      model: company,
    },
  });
  return find;
};

const createAirplane = (newAirplane) => {
  return airplane.create(newAirplane);
};

const getAirplane = () => {
  return airplane.findAll({
    attributes: { exclude: ["seatCapacity",], },
    // include: {
    //   model: company, attributes: { exclude: ["createdAt", "updatedAt",], },
    // },
    include: {
      model: company,
    },
  });
};

const findAirplaneById = (id) => {
  return airplane.findOne({
    where: {
      id,
    },
    attributes: { exclude: ["seatCapacity",], },
    include: {
      model: company,
    },
  });
};

const updateAirplane = async (reqBody, id) => {
  return await airplane.update(reqBody, { where: { id, }, });
};

const deleteAirplane = async (id) => {
  return await airplane.destroy({ where: { id, }, });
};

module.exports = {
  findAirplane,
  createAirplane,
  getAirplane,
  findAirplaneById,
  updateAirplane,
  deleteAirplane,
};
