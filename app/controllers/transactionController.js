// services
const transactionService = require("../services/transactionServices");

const addTransaction = (req, res, next) => {
  transactionService
    .addTransaction(req.body, req.user.id)
    .then((transaction) => {
      res.status(201).json({
        status: "Success",
        message: "Success Add New Transaction",
        data: transaction,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getTransactionByToken = (req, res, next) => {
  transactionService
    .getTransactionByToken(req.user.id)
    .then((transaction) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: transaction.length,
        data: transaction,
      });
    })
    .catch((err) => {
      next(err);
    });
};

// const getTransactionById = (req, res, next) => {
//   transactionService
//     .getTransactionById(req.params.id)
//     .then((transaction) => {
//       res.status(200).json({
//         status: "OK",
//         message: "Success",
//         data: transaction,
//       });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };

// const updateTransaction = (req, res, next) => {
//   transactionService
//     .updateTransaction(req.body, req.params.id)
//     .then((transaction) => {
//       res.status(200).json({
//         status: "Success",
//         message: "Success Update Transaction",
//         data: transaction,
//       });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };

// const deleteTransaction = (req, res, next) => {
//   transactionService
//     .deleteTransaction(req.params.id)
//     .then(() => {
//       res.status(200).json({
//         status: "Success",
//         message: "Success Delete Transaction",
//       });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };

module.exports = {
  addTransaction,
  getTransactionByToken,
//   getTransaction,
//   getTransactionById,
//   updateTransaction,
//   deleteTransaction,
};
