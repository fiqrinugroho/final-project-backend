const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const transactionRepository = require("../repositories/transactionRepository");
const passengerRepository = require("../repositories/passengerRepository");
const ticketRepository = require("../repositories/ticketRepository");

const addTransaction = async (reqBody, id) => {
  const {tripId, ticketFrom, ticketTo,} = reqBody;

  const date = Date(Date.now);
  const menit = date.split(":");
  const detik = menit[2].split(" ");
  const waktu = date.split(" ");
  const transactionCode = "TR"+waktu[3]+waktu[2]+menit[1]+detik[0];

  const from =  await ticketRepository.findTicketById(ticketFrom);
  const to =  await ticketRepository.findTicketById(ticketTo);
  if(!from){
    throw new ApiError(httpStatus.BAD_REQUEST, "ticket not found");
  }
  const find = await transactionRepository.findTransaction(transactionCode);
  if (find) {
    throw new ApiError(httpStatus.BAD_REQUEST, "transaction with this code already exists");
  } else {
    const passenger = await passengerRepository.create(reqBody);
    if (to){
      const totalPrice = from.price + to.price;
      const newTransaction = {
        transactionCode, 
        userId:id,
        ticketFrom, 
        ticketTo, 
        tripId, 
        totalPrice,
        status: "pending",
        passengerId: passenger.id,
      };
      const add = await 
      transactionRepository.createTransaction(newTransaction);;
      return await transactionRepository.getTransaction(add.id);
    }else {
      const newTransaction = {
        transactionCode, 
        userId:id,
        ticketFrom, 
        tripId, 
        totalPrice:from.price,
        status: "pending",
        passengerId: passenger.id,
      };
      const add = await 
      transactionRepository.createTransaction(newTransaction);;
      return await transactionRepository.getTransaction(add.id);
    }
  }
};

// const getTransaction = async () => {
//   return await transactionRepository.getTransaction();
// };

// const getTransactionById = async (id) => {
//   const transaction = await transactionRepository.findTransactionById(id);

//   if (!transaction) {
//     throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
//   } else {
//     return transaction;
//   }
// };

// const updateTransaction = async (reqBody, id) => {
//   const transaction = await transactionRepository.findTransactionById(id);

//   if (!transaction) {
//     throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
//   } else {
//     await transactionRepository.updateTransaction(reqBody, id);
//     const getTransaction = await transactionRepository.findTransactionById(id);

//     return {
//       id: getTransaction.id,
//       firstName: getTransaction.firstName,
//       price: getTransaction.price,
//       priceCode: getTransaction.priceCode,
//       createdAt: getTransaction.createdAt,
//       updatedAt: getTransaction.updatedAt,
//     };
//   }
// };

// const deleteTransaction = async (id) => {
//   const transaction = await transactionRepository.findTransactionById(id);

//   if (!transaction) {
//     throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
//   } else {
//     return await transactionRepository.deleteTransaction(id);
//   }
// };

module.exports = {
  addTransaction,
//   getTransaction,
//   getTransactionById,
//   updateTransaction,
//   deleteTransaction,
};
