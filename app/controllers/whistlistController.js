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

const getWish = (req, res, next) => {
  whistlistService
    .getWish()
    .then((whistlist) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: whistlist.length,
        data: whistlist,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getWishById = (req, res, next) => {
  whistlistService
    .getWishById(req.user.id)
    .then((whistlist) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: whistlist,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createWish,
  getWish,
  getWishById,
};
