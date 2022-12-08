// services
const companyService = require("../services/companyServices");

const createCompany = (req, res, next) => {
  companyService
    .createCompany(req.body.companyName, req.file)
    .then((company) => {
      res.status(201).json({
        status: "Success",
        message: "Success Create New Company",
        data: company,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getCompany = (req, res, next) => {
  companyService
    .getCompany()
    .then((company) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: company.length,
        data: company,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getCompanyById = (req, res, next) => {
  companyService
    .getCompanyById(req.params.id)
    .then((company) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: company,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const updateCompany = (req, res, next) => {
  companyService
    .updateCompany(req.body.companyName, req.file, req.params.id)
    .then((company) => {
      res.status(200).json({
        status: "Success",
        message: "Success Update Company",
        data: company,
      });
    })
    .catch((err) => {
      next(err);
    });
};

// const deleteCompany = (req, res, next) => {
//   companyService
//     .deleteCompany(req.params.id)
//     .then(() => {
//       res.status(200).json({
//         status: "Success",
//         message: "Success Delete Company",
//       });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };

module.exports = {
  createCompany,
  getCompany,
  getCompanyById,
  updateCompany,
  // deleteCompany,
};
