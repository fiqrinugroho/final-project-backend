const { notification,} = require("../models");

const addNotif = (notif) => {
  return notification.create(notif);
};

const getNotif = (userId) => {
  return notification.findAll({
    where: {
      userId,
    },
  });
};

const getNotifById = (userId, id) => {
  return notification.findOne({
    where: {
      userId,
      id,
    },
  });
};

module.exports = {
  addNotif,
  getNotif,
  getNotifById,
};
