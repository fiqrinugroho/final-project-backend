const router = require("express").Router();

// controller
const payment = require("../../app/controllers/paymentController");

// middleware
const Authentication = require("../../middlewares/authenticate");

router.get("/", Authentication, payment.getPayment);
router.put("/", Authentication, payment.createPayment);


module.exports = router;
