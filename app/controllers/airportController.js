// services
const airportService = require("../services/airportServices");

const createAirport = (req, res, next) => {
  airportService
    .createAirport(req.body)
    .then((airport) => {
      res.status(200).json({
        status: "OK",
        message: "Success Create New Airport",
        data: airport,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createAirport,
};
