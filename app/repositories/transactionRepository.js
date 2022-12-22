const { ticket, user, transaction, passenger,
  typeTrip, airport, airplane, company, } = require("../models");

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
        include: [
          {
            model: airport, 
            as:"origin",
          },
          {
            model: airport, 
            as:"destination",
          },
          {
            model: airplane, attributes: { exclude: ["seatCapacity",], },
            include: company,
          },
        ],
        attributes: { exclude: ["seatNumber",], },
        as:"from",
      },
      {
        model: ticket,
        attributes: { exclude: ["seatNumber",], },
        as:"to",
      },
    ],
  });
  return find;
};

const getTransactionByUserId = async (userId) => {
  // cari berdasarkan nama ticket
  return await transaction.findAll({
    where: {
      userId,
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
        include: [
          {
            model: airport, 
            as:"origin",
          },
          {
            model: airport, 
            as:"destination",
          },
          {
            model: airplane, attributes: { exclude: ["seatCapacity",], },
            include: company,
          },
        ],
        attributes: { exclude: ["seatNumber",], },
        as:"from",
      },
      {
        model: ticket,
        attributes: { exclude: ["seatNumber",], },
        as:"to",
      },
    ],
  });
};

module.exports = {
  createTransaction,
  findTransaction,
  getTransaction,
  getTransactionByUserId,
};