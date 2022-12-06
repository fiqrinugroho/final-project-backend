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

module.exports = {
  findAirport,
  createAirport,
};
