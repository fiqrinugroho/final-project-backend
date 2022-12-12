const router = require("express").Router();

// controller
const airplane = require("../../app/controllers/airplaneController");

// middleware
const Authentication = require("../../middlewares/authenticate");
const isAdmin = require("../../middlewares/isAdmin");

router.post("/create", Authentication, isAdmin, airplane.createAirplane);
router.get("/", airplane.getAirplane);
router.get("/:id", airplane.getAirplaneById);
router.put("/update/:id", Authentication, isAdmin, airplane.updateAirplane);
router.delete("/delete/:id", Authentication, isAdmin, airplane.deleteAirplane);

module.exports = router;
