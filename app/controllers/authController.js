// services
const authService = require("../services/authServices");

const login = (req, res, next) => {
  authService
    .login(req.body)
    .then((user) => {
      res.status(200).json({
        status: "OK",
        message: "Success Login",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const register = (req, res, next) => {
  authService
    .registerNewUser(req.body)
    .then((user) => {
      res.status(201).json({
        status: "OK",
        message: "Success Register New User",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  login,
  register,
};
