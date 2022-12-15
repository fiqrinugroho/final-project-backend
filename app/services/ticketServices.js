const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const ticketRepository = require("../repositories/ticketRepository");
const airportRepository = require("../repositories/airportRepository");
const airplaneRepository = require("../repositories/airplaneRepository");

const createTicket = async (reqBody) => {
  const { code, departureDate, departureTime, arrivalDate, arrivalTime, 
    flightFrom, flightTo, airplane,  price, capacity, seatNumber,} = reqBody;
  const seatClass = reqBody.class;
  
  const airportOrigin = await airportRepository.findAirport(flightFrom);
  const airportDestination = await airportRepository.findAirport(flightTo);
  const findAirplane = await airplaneRepository.findAirplane(airplane);

  // validasi data yang kosong
  if (!departureDate) throw new ApiError(httpStatus.BAD_REQUEST, "departure date cannot be empty");
  if (!departureTime) throw new ApiError(httpStatus.BAD_REQUEST, "departure time cannot be empty");
  if (!arrivalDate) throw new ApiError(httpStatus.BAD_REQUEST, "arrival date cannot be empty");
  if (!arrivalTime) throw new ApiError(httpStatus.BAD_REQUEST, "departure time cannot be empty");
  if (!flightFrom) throw new ApiError(httpStatus.BAD_REQUEST, "origin airport cannot be empty");
  if (!flightTo) throw new ApiError(httpStatus.BAD_REQUEST, "destination airport cannot be empty");
  if (!airplane) throw new ApiError(httpStatus.BAD_REQUEST, "airplane cannot be empty");
  if (!code) throw new ApiError(httpStatus.BAD_REQUEST, "ticket code cannot be empty");
  if (!price) throw new ApiError(httpStatus.BAD_REQUEST, "ticket price cannot be empty");
  if (!capacity) throw new ApiError(httpStatus.BAD_REQUEST, "baggage capacity cannot be empty");
  if (!seatClass) throw new ApiError(httpStatus.BAD_REQUEST, "seat class cannot be empty");
  if (!seatNumber) throw new ApiError(httpStatus.BAD_REQUEST, "seat number cannot be empty");
  if (!findAirplane) throw new ApiError(httpStatus.BAD_REQUEST, "destination airport not found");
  if (!airportOrigin) throw new ApiError(httpStatus.BAD_REQUEST, "origin airport not found");
  if (!airportDestination) throw new ApiError(httpStatus.BAD_REQUEST, "destination airport not found");

  const ticket = await ticketRepository.findTicket(code);

  if (ticket) {
    throw new ApiError(httpStatus.BAD_REQUEST, "ticket with this code already exists");
  } else {
    const newTicket = {
      code, departureDate, departureTime, arrivalDate, arrivalTime,
      price, capacity, seatNumber,
      flightFrom:airportOrigin.id,
      flightTo:airportDestination.id,
      airplaneId:findAirplane.id,
      class:seatClass,
    };
    const addTicket = await ticketRepository.createTicket(newTicket);
    const viewTicket = {
      id:addTicket.id,
      code, departureDate, departureTime, arrivalDate, arrivalTime,
      price, capacity, seatNumber,
      class:seatClass,
      flightFrom:airportOrigin,
      flightTo:airportDestination,
      airplane:findAirplane,
    };
    return viewTicket;
  }
};
  
const getTicket = async () => {
  return await ticketRepository.getTicket();
};
  
// const getTicketById = async (id) => {
//   const ticket = await ticketRepository.findTicketById(id);
  
//   if (!ticket) {
//     throw new ApiError(httpStatus.NOT_FOUND, "ticket not found");
//   } else {
//     return ticket;
//   }
// };
  
// const updateTicket = async (reqBody, id) => {
//   const ticket = await ticketRepository.findTicketById(id);
  
//   if (!ticket) {
//     throw new ApiError(httpStatus.NOT_FOUND, "ticket not found");
//   } else {
//     await ticketRepository.updateTicket(reqBody, id);
//     const getTicket = await ticketRepository.findTicketById(id);
  
//     return {
//       id: getTicket.id,
//       departureDate: getTicket.departureDate,
//       departureTime: getTicket.departureTime,
//       code: getTicket.code,
//       createdAt: getTicket.createdAt,
//       updatedAt: getTicket.updatedAt,
//     };
//   }
// };
  
// const deleteTicket = async (id) => {
//   const ticket = await ticketRepository.findTicketById(id);
  
//   if (!ticket) {
//     throw new ApiError(httpStatus.NOT_FOUND, "ticket not found");
//   } else {
//     return await ticketRepository.deleteTicket(id);
//   }
// };
  
module.exports = {
  createTicket,
  getTicket,
//   getTicketById,
//   updateTicket,
//   deleteTicket,
};