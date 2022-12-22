const { ticket, user, transaction, passenger, typeTrip , } = require("../models");

const createTransaction = (addTransaction) => {
  return transaction.create(addTransaction);
};

const findTransaction = (transactionCode) => {
  const find = transaction.findOne({
    where: {
      transactionCode,
    },
    include: [
      {
        model: user,
      },
      {
        model: typeTrip,
      },
    ],
  });
  return find;
};
const getTransaction = (id) => {
  // cari berdasarkan nama ticket
  const find = transaction.findOne({
    where: {
      id,
    },
    include: [
      {
        model: user, attributes: { exclude: ["password",], },
      },
      {
        model: typeTrip,
      },
      {
        model: passenger,
      },
      {
        model: ticket,
        as:"from",
      },
      {
        model: ticket,
        as:"to",
      },
    ],
  });
  return find;
};

module.exports = {
  createTransaction,
  findTransaction,
  getTransaction,
};