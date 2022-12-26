const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const transactionRepository = require("../repositories/transactionRepository");
const passengerRepository = require("../repositories/passengerRepository");
const ticketRepository = require("../repositories/ticketRepository");

const addTransaction = async (reqBody, id) => {
  const {tripId, ticketGo, ticketBack,} = reqBody;

  const date = Date(Date.now);
  const menit = date.split(":");
  const detik = menit[2].split(" ");
  const waktu = date.split(" ");
  const transactionCode = "TR"+waktu[3]+waktu[2]+menit[1]+detik[0];

  const from =  await ticketRepository.findTicketById(ticketGo);
  if(!from){
    throw new ApiError(httpStatus.BAD_REQUEST, "ticket not found");
  }
  const find = await transactionRepository.findTransaction(transactionCode);
  if (find) {
    throw new ApiError(httpStatus.BAD_REQUEST, "transaction with this code already exists");
  } else {
    const passenger = await passengerRepository.create(reqBody);
    if (tripId == 2){
      const to =  await ticketRepository.findTicketById(ticketBack);
      const totalPrice = from.price + to.price;
      const newTransaction = {
        transactionCode, 
        userId:id,
        ticketGo, 
        ticketBack, 
        tripId, 
        totalPrice,
        status: "pending",
        passengerId: passenger.id,
      };
      const add = await 
      transactionRepository.createTransaction(newTransaction);;
      return await transactionRepository.getTransactionById(add.id);
    }else {
      const newTransaction = {
        transactionCode, 
        userId:id,
        ticketGo, 
        tripId, 
        totalPrice:from.price,
        status: "pending",
        passengerId: passenger.id,
      };
      const add = await 
      transactionRepository.createTransaction(newTransaction);;
      return await transactionRepository.getTransactionById(add.id);
    }
  }
};

const getTransactionByToken = async (id) => {
  return await transactionRepository.getTransactionByUserId(id);
};

const getTransactionByTokenAndId = async (userId, id) => {
  const transaction = 
  await transactionRepository.getTransactionByUserIdAndId(userId, id);

  if (transaction.length == 0 ) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    return await transactionRepository.getTransactionById(id);
  }
};

const getTransactionByTokenAndStatus = async (userId, reqQuery) => {
  const {status,}= reqQuery;

  const transaction = 
  await transactionRepository.getTransactionUserByStatus(userId, status);

  if (transaction.length == 0 ) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    return await transactionRepository
      .getTransactionUserByStatus(userId, status);
  }
};

const getTransactionByTokenAndTripId= async (userId, reqQuery) => {
  const {tripId,}= reqQuery;

  const transaction = 
  await transactionRepository.getTransactionUserByTripId(userId, tripId);

  if (transaction.length == 0 ) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    return await transactionRepository
      .getTransactionUserByTripId(userId, tripId);
  }
};

const getTransactionByStatus = async (reqQuery) => {
  const {status,}= reqQuery;
  const transaction = 
  await transactionRepository.getTransactionAdminByStatus(status);

  if (transaction.length == 0 ) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    return await transactionRepository
      .getTransactionAdminByStatus(status);
  }
};

const getTransactionByTripId = async (reqQuery) => {
  const {tripId,}= reqQuery;
  const transaction = 
  await transactionRepository.getTransactionAdminByTripId(tripId);

  if (transaction.length == 0 ) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    return await transactionRepository
      .getTransactionAdminByTripId(tripId);
  }
};

const getTransaction = async () => {
  return await transactionRepository.getTransaction();
};

const getTransactionById = async (id) => {
  const transaction = await transactionRepository.getTransactionById(id);

  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    return transaction;
  }
};

const updateTransaction = async (reqBody, userId, id) => {
  const transaction = 
  await transactionRepository.getTransactionByUserIdAndId(userId, id);

  if (transaction.length == 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    const data = 
    await transactionRepository.getTransactionById(id);
    await passengerRepository.updatePassenger(reqBody, data.passengerId);
    await transactionRepository.updateTransaction(reqBody, userId, id);

    return await transactionRepository.getTransactionById(id);
  }

};

const cancelTransaction = async (id) => {
  const transaction = 
  await transactionRepository.getTransactionById(id);

  if (transaction.length == 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    const cancel ={
      status:"canceled",
    };
    await transactionRepository.updateTransactionAdmin(cancel, id);

    return await transactionRepository.getTransactionById(id);
  }
};

const updateTransactionAdmin = async (reqBody, id) => {
  const transaction = await transactionRepository.getTransactionById(id);

  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    await passengerRepository.updatePassenger(reqBody, transaction.passengerId);
    await transactionRepository.updateTransactionAdmin(reqBody, id);

    return await transactionRepository.getTransactionById(id);
  }
};

const deleteTransactionAdmin = async (id) => {
  const transaction = await transactionRepository.getTransactionById(id);

  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, "transaction not found");
  } else {
    await passengerRepository.deletePassenger(transaction.passengerId);
    return await transactionRepository.deleteTransactionAdmin(id);
  }
};

module.exports = {
  addTransaction,
  getTransactionByToken,
  getTransactionByTokenAndId,
  getTransaction,
  getTransactionById,
  getTransactionByTokenAndStatus,
  getTransactionByTokenAndTripId,
  getTransactionByStatus,
  getTransactionByTripId,
  updateTransaction,
  cancelTransaction,
  updateTransactionAdmin,
  deleteTransactionAdmin,
};
