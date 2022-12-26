const { payment, transaction,} = require("../models");

const getPaymentData = () => {
  return payment.findAll();
};

const getPaymentById = (id) => {
  return payment.findOne({
    where: {
      id,
    },
  });
};

const createPayment = async (paymentId, id) => {
  return await transaction.update(paymentId, { where: { id, }, });
};
  

module.exports = {
  createPayment, 
  getPaymentData,
  getPaymentById,
};