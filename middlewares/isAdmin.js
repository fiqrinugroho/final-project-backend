module.exports = function (req, res, next) {
  if (req.user.roleId === 1) {
    next();
  } else {
    res.status(403).json({
      status: "Unauthorized Access",
      message: "only admin can access this page",
    });
  }
};
