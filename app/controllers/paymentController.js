// services
const paymentService = require("../services/paymentServices");

const createPayment = (req, res, next) => {
  paymentService
    .createPayment(req.body)
    .then((payment) => {
      res.status(200).json({
        status: "Success",
        notifId:payment.id,
        message:payment.message,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getPayment = (req, res, next) => {
  paymentService
    .getPayment()
    .then((payment) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: payment.length,
        data: payment,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getPaymentById = (req, res, next) => {
  paymentService
    .getPaymentById(req.params.id)
    .then((payment) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: payment.length,
        data: payment,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createPayment,
  getPayment,
  getPaymentById,
};
