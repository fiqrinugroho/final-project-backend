const { notification,} = require("../models");

const addNotif = (notif) => {
  return notification.create(notif);
};

const deleteNotifById = (id) => {
  return notification.destroy({ where: { id, }, });

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

const findNotifById = (id) => {
  return notification.findOne({
    where: {
      id,
    },
  });
};

module.exports = {
  addNotif,
  getNotif,
  getNotifById,
  findNotifById,
  deleteNotifById,
};
