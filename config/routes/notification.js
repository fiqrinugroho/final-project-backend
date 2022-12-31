const router = require("express").Router();

// controller
const notif = require("../../app/controllers/notifController");

// middleware
const Authentication = require("../../middlewares/authenticate");

router.post("/", Authentication, notif.createNotification);
router.get("/", Authentication, notif.getNotification);
router.get("/:id", Authentication, notif.getNotificationById);
router.delete("/delete/:id", Authentication, notif.deleteNotificationById);

module.exports = router;
