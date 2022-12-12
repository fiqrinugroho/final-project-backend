// services
const airplaneService = require("../services/airplaneServices");

const createAirplane = (req, res, next) => {
  airplaneService
    .createAirplane(req.body, req.file)
    .then((airplane) => {
      res.status(201).json({
        status: "Success",
        message: "Success Create New Airplane",
        data: airplane,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getAirplane = (req, res, next) => {
  airplaneService
    .getAirplane()
    .then((airplane) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: airplane.length,
        data: airplane,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getAirplaneById = (req, res, next) => {
  airplaneService
    .getAirplaneById(req.params.id)
    .then((airplane) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: airplane,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const updateAirplane = (req, res, next) => {
  airplaneService
    .updateAirplane(req.body, req.params.id)
    .then((airplane) => {
      res.status(200).json({
        status: "Success",
        message: "Success Update Airplane",
        data: airplane,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteAirplane = (req, res, next) => {
  airplaneService
    .deleteAirplane(req.params.id)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Success Delete Airplane",
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createAirplane,
  getAirplane,
  getAirplaneById,
  updateAirplane,
  deleteAirplane,
};
