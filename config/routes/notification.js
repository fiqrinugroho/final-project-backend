const router = require("express").Router();

// controller
const notif = require("../../app/controllers/notifController");

// middleware
const Authentication = require("../../middlewares/authenticate");

router.get("/", Authentication, notif.getNotif);
router.get("/:id", Authentication, notif.getNotifById);

module.exports = router;
