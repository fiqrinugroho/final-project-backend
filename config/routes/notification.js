const router = require("express").Router();

// controller
const notif = require("../../app/controllers/notifController");

// middleware
const Authentication = require("../../middlewares/authenticate");

router.get("/", Authentication, notif.getNotification);
router.get("/:id", Authentication, notif.getNotificationById);

module.exports = router;
