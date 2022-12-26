const { ticket, airport, airplane, company, } = require("../models");
const { Op, } = require("sequelize");

// untuk mencari data sesuai dengan nama ticket
const findTicket = (code) => {
  // cari berdasarkan nama ticket
  const find = ticket.findOne({
    where: {
      code,
    },
    attributes: { exclude: ["seatNumber",], },
    include: [
      {
        model: airport, 
        as:"origin",
      },
      {
        model: airport, 
        as:"destination",
      },
      {
        model: airplane, attributes: { exclude: ["seatCapacity",], },
        include: company,
      },
    ],
  });
  return find;
};

const createTicket = (newTicket) => {
  return ticket.create(newTicket);
};

const getTicket = () => {
  return ticket.findAll({
    attributes: { exclude: ["seatNumber",], },
    include: [
      {
        model: airport, 
        as:"origin",
      },
      {
        model: airport, 
        as:"destination",
      },
      {
        model: airplane, attributes: { exclude: ["seatCapacity",], },
        include: company,
      },
    ],
  });
};

const findTicketById = (id) => {
  return ticket.findOne({
    where: {
      id,
    },
    attributes: { exclude: ["seatNumber",], },
    include: [
      {
        model: airport, 
        as:"origin",
      },
      {
        model: airport, 
        as:"destination",
      },
      {
        model: airplane, attributes: { exclude: ["seatCapacity",], },
        include: company,
      },
    ],
  });
};

const updateTicket = async (reqBody, id) => {
  return await ticket.update(reqBody, { where: { id, }, });
};

const deleteTicket = async (id) => {
  return await ticket.destroy({ where: { id, }, });
};

const searchTicket = async (departureDate, originCity, destinationCity) => {

  return await ticket.findAll({ 
    
    where: { 
      departureDate, 
    },
    attributes: { exclude: ["seatNumber",], },
    include: [
      {
        model: airport, 
        as:"origin",
        where: {
          city:{[Op.like]:`%${originCity}%`,},
        },
      },
      {
        model: airport, 
        as:"destination",
        where: {
          city:{[Op.like]:`%${destinationCity}%`,},
        },
      },
      {
        model: airplane, attributes: { exclude: ["seatCapacity",], },
        include: company,
      },
    ], });
};

module.exports = {
  findTicket,
  createTicket,
  getTicket,
  findTicketById,
  updateTicket,
  deleteTicket,
  searchTicket,
};
