const whistlistRepository = require("../repositories/whistlistRepository");

const createWish = async (reqBody, userId) => {
  const { ticketId } = reqBody
  const newWish = {
    ticketId,
    userId,
  };

  return await whistlistRepository.createWish(newWish);
};

module.exports = {
  createWish,
};
