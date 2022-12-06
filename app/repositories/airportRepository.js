const { airport } = require("../models");

// untuk mencari data sesuai dengan nama airport
const findAirport = (airportName) => {
  // cari berdasarkan nama airport
  const find = airport.findOne({
    where: {
      airportName,
    },
  });
  return find;
};

const createAirport = (newAirport) => {
  return airport.create(newAirport);
};

const getAirport = () => {
  return airport.findAll();
};

const getAirportById = (id) => {
  return airport.findOne({
    where: {
      id,
    },
  });
};

const findAirportById = (id) => {
  const find = airport.findOne({
    where: {
      id,
    },
  });
  return find;
};

const updateAirport = async (reqBody, id) => {
  return await airport.update(reqBody, { where: { id } });
};

const deleteAirport = async (id) => {
  return await airport.destroy({ where: { id } });
};

module.exports = {
  findAirport,
  createAirport,
  getAirport,
  getAirportById,
  findAirportById,
  updateAirport,
  deleteAirport,
};
