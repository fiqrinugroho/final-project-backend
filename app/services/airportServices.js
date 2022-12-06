const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const airportRepository = require("../repositories/airportRepository");

const createAirport = async (reqBody) => {
  const { airportName, city, cityCode } = reqBody;

  // validasi data yang kosong
  if (!airportName)
    throw new ApiError(httpStatus.BAD_REQUEST, "airport name cannot be empty");
  if (!city) throw new ApiError(httpStatus.BAD_REQUEST, "city cannot be empty");
  if (!cityCode)
    throw new ApiError(httpStatus.BAD_REQUEST, "city code cannot be empty");

  const airport = await airportRepository.findAirport(airportName);
  if (airport) {
    throw new ApiError(httpStatus.BAD_REQUEST, `this airport already exists`);
  } else {
    const newAirport = {
      airportName,
      city,
      cityCode,
    };
    return await airportRepository.createAirport(newAirport);
  }
};

const getAirport = async () => {
  return await airportRepository.getAirport();
};

const getAirportById = async (id) => {
  return await airportRepository.getAirportById(id);
};

module.exports = {
  createAirport,
  getAirport,
  getAirportById,
};
