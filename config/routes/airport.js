const router = require("express").Router();

// controller
const airport = require("../../app/controllers/airportController");

// middleware
const Authentication = require("../../middlewares/authenticate");
const isAdmin = require("../../middlewares/isAdmin");

router.post("/create", Authentication, isAdmin, airport.createAirport);
router.get("/", airport.getAirport);
router.get("/:id", airport.getAirportById);
router.put("/update/:id", Authentication, isAdmin, airport.updateAirport);
router.delete("/delete/:id", Authentication, isAdmin, airport.deleteAirport);

module.exports = router;
