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

const updateCompany = async (reqBody, id) => {
  return await company.update(reqBody, { where: { id } });
};

module.exports = {
  findCompany,
  createCompany,
  getCompany,
  findCompanyById,
  updateCompany,
};
