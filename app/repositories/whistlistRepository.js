const { user, ticket, whistlist, } = require("../models");

const createWish = async (newWish) => {
  return await whistlist.create(newWish);
};

const getWish= () => {
  return whistlist.findAll({
    include: [
      {
        model: user,
      },
      {
        model: ticket,
      },
    ],
  });
};

const findWish = (userId) => {
  const find = whistlist.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: user,
      },
      {
        model: ticket,
      },
    ],
  });
  return find;
};

const deleteWish = async (id) => {
  return await whistlist.destroy({ where: { id, }, });
};

module.exports = {
  createWish,
  getWish,
  findWish,
  deleteWish,
};
