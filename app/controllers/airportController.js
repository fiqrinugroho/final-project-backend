// services
const airportService = require("../services/airportServices");

const createAirport = (req, res, next) => {
  airportService
    .createAirport(req.body)
    .then((airport) => {
      res.status(201).json({
        status: "Success",
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

const updateAirport = (req, res, next) => {
  airportService
    .updateAirport(req.body, req.params.id)
    .then((airport) => {
      res.status(200).json({
        status: "Success",
        message: "Success Update Airport",
        data: airport,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteAirport = (req, res, next) => {
  airportService
    .deleteAirport(req.params.id)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Success Delete Airport",
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
  updateAirport,
  deleteAirport,
};
