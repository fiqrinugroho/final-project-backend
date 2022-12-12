const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const airplaneRepository = require("../repositories/airplaneRepository");
const companyRepository = require("../repositories/companyRepository");


const createAirplane = async (reqBody) => {
  const { airplaneName, airplaneCode, companyName, } = reqBody;

  // validasi data yang kosong
  if (!airplaneName)
    throw new ApiError(httpStatus.BAD_REQUEST, "airplane name cannot be empty");
  if (!airplaneCode)
    throw new ApiError(httpStatus.BAD_REQUEST, "airplane code cannot be empty");
  if (!companyName)
    throw new ApiError(httpStatus.BAD_REQUEST, "company cannot be empty");

  const company = await companyRepository.findCompany(companyName);
  if (!company) {
    throw new ApiError(httpStatus.NOT_FOUND, "company not found");
  } else {
    const newAirplane = {
      airplaneName,
      airplaneCode,
      companyId:company.id,
    };
    const addAirplane = await airplaneRepository.createAirplane(newAirplane);

    const newData = await airplaneRepository.findAirplaneById(addAirplane.id);
    return newData;
  }
};

const getAirplane = async () => {
  return await airplaneRepository.getAirplane();
};

const getAirplaneById = async (id) => {
  const airplane = await airplaneRepository.findAirplaneById(id);

  if (!airplane) {
    throw new ApiError(httpStatus.NOT_FOUND, "airplane not found");
  } else {
    return airplane;
  }
};

const updateAirplane = async (reqBody, id) => {
  const airplane = await airplaneRepository.findAirplaneById(id);

  if (!airplane) {
    throw new ApiError(httpStatus.NOT_FOUND, "airplane not found");
  } else {
    await airplaneRepository.updateAirplane(reqBody, id);

    return await airplaneRepository.findAirplaneById(id);

  }
};

const deleteAirplane = async (id) => {
  const airplane = await airplaneRepository.findAirplaneById(id);

  if (!airplane) {
    throw new ApiError(httpStatus.NOT_FOUND, "airplane not found");
  } else {
    return await airplaneRepository.deleteAirplane(id);
  }
};

module.exports = {
  createAirplane,
  getAirplane,
  getAirplaneById,
  updateAirplane,
  deleteAirplane,
};
