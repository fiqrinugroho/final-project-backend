const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const ticketRepository = require("../repositories/ticketRepository");
const airportRepository = require("../repositories/airportRepository");
const airplaneRepository = require("../repositories/airplaneRepository");

const createTicket = async (reqBody) => {
  const { code, departureDate, departureTime, arrivalDate, arrivalTime, 
    flightFrom, flightTo, airplaneId,  price, capacity,} = reqBody;
  const seatClass = reqBody.class;
  // cari data 
  const airportOrigin = await airportRepository.findAirportById(flightFrom);
  const airportDestination = await airportRepository.findAirportById(flightTo);
  const findAirplane = await airplaneRepository.findAirplaneById(airplaneId);

  // validasi data yang kosong
  if (!departureDate) throw new ApiError(httpStatus.BAD_REQUEST, "departure date cannot be empty");
  if (!departureTime) throw new ApiError(httpStatus.BAD_REQUEST, "departure time cannot be empty");
  if (!arrivalDate) throw new ApiError(httpStatus.BAD_REQUEST, "arrival date cannot be empty");
  if (!arrivalTime) throw new ApiError(httpStatus.BAD_REQUEST, "departure time cannot be empty");
  if (!flightFrom) throw new ApiError(httpStatus.BAD_REQUEST, "origin airport cannot be empty");
  if (!flightTo) throw new ApiError(httpStatus.BAD_REQUEST, "destination airport cannot be empty");
  if (!airplaneId) throw new ApiError(httpStatus.BAD_REQUEST, "airplane cannot be empty");
  if (!code) throw new ApiError(httpStatus.BAD_REQUEST, "ticket code cannot be empty");
  if (!price) throw new ApiError(httpStatus.BAD_REQUEST, "ticket price cannot be empty");
  if (!capacity) throw new ApiError(httpStatus.BAD_REQUEST, "baggage capacity cannot be empty");
  if (!seatClass) throw new ApiError(httpStatus.BAD_REQUEST, "seat class cannot be empty");
  if (!findAirplane) throw new ApiError(httpStatus.BAD_REQUEST, "airplane not found");
  if (!airportOrigin) throw new ApiError(httpStatus.BAD_REQUEST, "origin airport not found");
  if (!airportDestination) throw new ApiError(httpStatus.BAD_REQUEST, "destination airport not found");

  const ticket = await ticketRepository.findTicket(code);

  if (ticket) {
    throw new ApiError(httpStatus.BAD_REQUEST, "ticket with this code already exists");
  } else {
    const addTicket = await ticketRepository.createTicket(reqBody);

    return await ticketRepository.findTicketById(addTicket.id);
  }
};
  
const getTicket = async () => {
  return await ticketRepository.getTicket();
};
  
const getTicketById = async (id) => {
  const ticket = await ticketRepository.findTicketById(id);
  
  if (!ticket) {
    throw new ApiError(httpStatus.NOT_FOUND, "ticket not found");
  } else {
    return ticket;
  }
};
  
const updateTicket = async (reqBody, id) => {
  const ticket = await ticketRepository.findTicketById(id);
  
  if (!ticket) {
    throw new ApiError(httpStatus.NOT_FOUND, "ticket not found");
  } else {
    await ticketRepository.updateTicket(reqBody, id);
    return await ticketRepository.findTicketById(id);

  }
};
  
const deleteTicket = async (id) => {
  const ticket = await ticketRepository.findTicketById(id);
  
  if (!ticket) {
    throw new ApiError(httpStatus.NOT_FOUND, "ticket not found");
  } else {
    return await ticketRepository.deleteTicket(id);
  }
};
  
module.exports = {
  createTicket,
  getTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
};