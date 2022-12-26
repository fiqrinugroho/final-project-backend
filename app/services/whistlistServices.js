const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const whistlistRepository = require("../repositories/whistlistRepository");

const createWish = async (reqBody, userId) => {
  const { ticketId } = reqBody;
  const newWish = {
    ticketId,
    userId,
  };

  return await whistlistRepository.createWish(newWish);
};

const getWish = async () => {
  return await whistlistRepository.getWish();
};

const getWishById = async (userId) => {
  const whistlist = await whistlistRepository.findWish(userId);

  if (!whistlist) {
    throw new ApiError(httpStatus.NOT_FOUND, "no wishlist found");
  } else {
    return whistlist;
  }
};

const deleteWish = async (id) => {
    return await whistlistRepository.deleteWish(id);
};

module.exports = {
  createWish,
  getWish,
  getWishById,
  deleteWish
};
