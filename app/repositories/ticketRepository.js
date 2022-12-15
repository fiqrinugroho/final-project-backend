const { ticket, airport, airplane, } = require("../models");

// untuk mencari data sesuai dengan nama ticket
const findTicket = (ticketName) => {
  // cari berdasarkan nama ticket
  const find = ticket.findOne({
    where: {
      ticketName,
    },
    include: [
      {
        model: airport,
      },
      {
        model: airplane,
      },
    ],
  });
  return find;
};

const createTicket = (newTicket) => {
  return ticket.create(newTicket);
};

// const getTicket = () => {
//   return ticket.findAll({
//     attributes: { exclude: ["seatCapacity",], },
//     // include: {
//     //   model: airport, attributes: { exclude: ["createdAt", "updatedAt",], },
//     // },
//     include: {
//       model: airport,
//     },
//   });
// };

// const findTicketById = (id) => {
//   return ticket.findOne({
//     where: {
//       id,
//     },
//     attributes: { exclude: ["seatCapacity",], },
//     include: {
//       model: airport,
//     },
//   });
// };

// const updateTicket = async (reqBody, id) => {
//   return await ticket.update(reqBody, { where: { id, }, });
// };

// const deleteTicket = async (id) => {
//   return await ticket.destroy({ where: { id, }, });
// };

module.exports = {
  findTicket,
  createTicket,
//   getTicket,
//   findTicketById,
//   updateTicket,
//   deleteTicket,
};
