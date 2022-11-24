
const register = (req, res, next) =>{
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
}

module.exports = {
    register,
}
