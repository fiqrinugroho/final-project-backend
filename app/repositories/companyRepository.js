const { company } = require("../models");

const findCompany = (companyName) => {
  // cari berdasarkan nama company
  const find = company.findOne({
    where: {
      companyName,
    },
  });
  return find;
};

const createCompany = (newCompany) => {
  return company.create(newCompany);
};

const getCompany = () => {
  return company.findAll();
};

const findCompanyById = (id) => {
  const find = company.findOne({
    where: {
      id,
    },
  });
  return find;
};

module.exports = {
  findCompany,
  createCompany,
  getCompany,
  findCompanyById,
};
