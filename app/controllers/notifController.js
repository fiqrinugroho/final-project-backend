// services
const notifService = require("../services/notifServices");


const getNotification = (req, res, next) => {
  notifService
    .getNotification(req.user.id)
    .then((notif) => {
      res.status(200).json({
        status: "OK",
        totalData:notif.length,
        data: notif,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const createNotification = (req, res, next) => {
  notifService
    .createNotification(req.user.id, req.body.message)
    .then((notif) => {
      res.status(200).json({
        status: "OK",
        notifId:notif.id,
        message:notif.message,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getNotificationById = (req, res, next) => {
  notifService
    .getNotificationById(req.user.id, req.params.id)
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
  createNotification,
  getNotificationById,
};
