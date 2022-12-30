const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const paymentRepository = require("../repositories/paymentRepository");
const transactionRepository = require("../repositories/transactionRepository");

const createPayment = async (reqBody) => {
  const { paymentId, transactionId, } = reqBody;
  const payment = await paymentRepository.getPaymentById(paymentId);

  if (!payment) {
    throw new ApiError(httpStatus.NOT_FOUND, "payment not found");
  } else {
    const transaction = 
        await transactionRepository.getTransactionById(transactionId);

    if (!transaction) {
      throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
    } else {
      const newPayment = {
        paymentId,
        status:"success",
      };
      await paymentRepository.createPayment(newPayment, transactionId);

      return await transactionRepository.getTransactionById(transactionId);
    }
  }
};

const getPayment = async () => {
  return await paymentRepository.getPaymentData();
};

const getPaymentById = async (id) => {
  return await paymentRepository.getPaymentById(id);
};

module.exports = {
  createPayment,
  getPayment,
  getPaymentById,
};
