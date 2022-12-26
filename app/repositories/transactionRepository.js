const { ticket, user, transaction, passenger,
  typeTrip, airport, airplane, company, } = require("../models");
const { Op, } = require("sequelize");

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

const getTransaction = () => {
  const find = transaction.findAll({
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
        as:"go",
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
        as:"back",
      },
    ],
  });
  return find;
};

const getTransactionById = (id) => {
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
        as:"go",
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
        as:"back",
      },
    ],
  });
  return find;
};

const getTransactionByUserId = async (userId) => {
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
        as:"go",
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
        as:"back",
        
      },
    ],
  });
};

const getTransactionByUserIdAndId = async (userId, id) => {
  return await transaction.findAll({
    where: {
      [Op.and]: [
        { id, },
        { userId, },
      ],
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
        as:"go",
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
        as:"back",
        
      },
    ],
  });
};

const getTransactionUserByStatus= async (userId, status) => {
  return await transaction.findAll({
    where: {
      [Op.and]: [
        { userId, },
        { status, },
      ],
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
        as:"go",
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
        as:"back",
        
      },
    ],
  });
};

const getTransactionUserByTripId = async (userId, tripId) => {
  return await transaction.findAll({
    where: {
      [Op.and]: [
        { userId, },
        { tripId, },
      ],
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
        as:"go",
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
        as:"back",
        
      },
    ],
  });
};

const getTransactionAdminByStatus = async (status) => {
  return await transaction.findAll({
    where: {
      status, 
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
        as:"go",
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
        as:"back",
        
      },
    ],
  });
};

const getTransactionAdminByTripId = async (tripId) => {
  return await transaction.findAll({
    where: {
      tripId, 
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
        as:"go",
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
        as:"back",
        
      },
    ],
  });
};

const updateTransaction = async (reqBody, userId, id) => {
  return await transaction.update(reqBody, 
    { 
      where: { [Op.and]: [
        { id, },
        { userId, },
      ], 
      }, 
    });
};

const deleteTransaction = async (userId, id) => {
  return await transaction.destroy({ 
    where: { [Op.and]: [
      { id, },
      { userId, },
    ], 
    },  });
};

const updateTransactionAdmin = async (reqBody, id) => {
  return await transaction.update(reqBody, { where: { id, }, });
};

const deleteTransactionAdmin = async (id) => {
  return await transaction.destroy({ where: { id, }, });
};

module.exports = {
  createTransaction,
  findTransaction,
  getTransactionById,
  getTransaction,
  getTransactionByUserId,
  getTransactionByUserIdAndId,
  getTransactionUserByStatus,
  getTransactionUserByTripId, 
  getTransactionAdminByStatus,
  getTransactionAdminByTripId,
  updateTransaction,
  deleteTransaction,
  updateTransactionAdmin,
  deleteTransactionAdmin,
};