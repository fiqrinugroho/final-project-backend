// services
const ticketService = require("../services/ticketServices");

const createTicket = (req, res, next) => {
  ticketService
    .createTicket(req.body, req.file)
    .then((ticket) => {
      res.status(201).json({
        status: "Success",
        message: "Success Create New Ticket",
        data: ticket,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getTicket = (req, res, next) => {
  ticketService
    .getTicket()
    .then((ticket) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: ticket.length,
        data: ticket,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getTicketById = (req, res, next) => {
  ticketService
    .getTicketById(req.params.id)
    .then((ticket) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: ticket,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const updateTicket = (req, res, next) => {
  ticketService
    .updateTicket(req.body, req.params.id)
    .then((ticket) => {
      res.status(200).json({
        status: "Success",
        message: "Success Update Ticket",
        data: ticket,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteTicket = (req, res, next) => {
  ticketService
    .deleteTicket(req.params.id)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Success Delete Ticket",
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createTicket,
  getTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
};
