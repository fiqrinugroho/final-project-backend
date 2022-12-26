const whistlistService = require("../services/whistlistServices");

const createWish = (req, res, next) => {
  whistlistService
    .createWish(req.body, req.user.id)
    .then((whistlist) => {
      res.status(201).json({
        status: "Success",
        message: "Success Add New Wishlist",
        data: whistlist,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createWish,
};
