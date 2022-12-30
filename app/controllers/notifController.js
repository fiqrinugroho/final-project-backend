// services
const notifService = require("../services/notifServices");


const getNotification = (req, res, next) => {
  notifService
    .getNotification()
    .then((notif) => {
      res.status(200).json({
        status: "OK",
        data: notif,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getNotificationById = (req, res, next) => {
  notifService
    .getNotificationById(req.params.id)
    .then((notif) => {
      res.status(200).json({
        status: "OK",
        data: notif,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getNotification,
  getNotificationById,
};
