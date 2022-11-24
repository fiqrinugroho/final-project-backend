// services
const authService = require('../services/authServices');

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

module.exports = {
    login,
}
