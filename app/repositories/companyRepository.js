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

module.exports = {
  findCompany,
  createCompany,
  getCompany,
};
