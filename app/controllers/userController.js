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
  console.log(req.file);
  console.log(req.body);
  userService
    .updateUser(req.body, req.file, req.user.id)
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

const deleteUser = (req, res, next) => {
  userService
    .deleteUser(req.user.id)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "User Deleted",
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
};
