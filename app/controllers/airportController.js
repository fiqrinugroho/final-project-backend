// services
const airportService = require("../services/airportServices");

const createAirport = (req, res, next) => {
  airportService
    .createAirport(req.body)
    .then((airport) => {
      res.status(201).json({
        status: "OK",
        message: "Success Create New Airport",
        data: airport,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getAirport = (req, res, next) => {
  airportService
    .getAirport()
    .then((airport) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: airport.length,
        data: airport,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getAirportById = (req, res, next) => {
  airportService
    .getAirportById(req.params.id)
    .then((airport) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: airport,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createAirport,
  getAirport,
  getAirportById,
};
