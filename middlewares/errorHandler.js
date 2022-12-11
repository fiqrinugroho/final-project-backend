// eslint-disable-next-line no-console
module.exports = (err, req, res, next) => {
  err.statuscode = err.statusCode || 500;
  err.status = err.status || "Error";
  res.status(err.statuscode).json({
    status: err.status,
    message: err.message,
    next,
  });
};
