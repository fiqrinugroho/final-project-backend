const userService = require("../services/userServices");

const getUserById = (req, res, next) => {
  userService
    .getUserById(req.user.id)
    .then((user) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const updateUser = (req, res, next) => {
  userService
    .updateUser(req.body, req.user.id)
    .then((user) => {
      res.status(200).json({
        status: "Success",
        message: "Success Update Profile",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
    getUserById,
    updateUser,
}