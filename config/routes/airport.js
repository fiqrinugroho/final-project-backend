const router = require("express").Router();

// controller
const airport = require("../../app/controllers/airportController");

// middleware
const Authentication = require("../../middlewares/authenticate");
const isAdmin = require("../../middlewares/isAdmin");

router.post("/create", Authentication, isAdmin, airport.createAirport);

module.exports = router;
