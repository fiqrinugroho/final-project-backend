const { whistlist } = require("../models");

const createWish = async (newWish) => {
  return await whistlist.create(newWish);
};

// const getWishById = (id) => {
//   return user.findOne({
//     where: {
//       id,
//     },
//     include: {
//       model: ticket,
//     },
//   });
// };

module.exports = {
  createWish,
};
