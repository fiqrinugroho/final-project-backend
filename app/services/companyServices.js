const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const companyRepository = require("../repositories/companyRepository");
const imagekit = require("../../lib/imageKit");

const createCompany = async (companyName, file) => {
  // validasi data yang kosong
  if (!companyName)
    throw new ApiError(httpStatus.BAD_REQUEST, "company name cannot be empty");
  if (file == null)
    throw new ApiError(httpStatus.BAD_REQUEST, "company image cannot be empty");

  const company = await companyRepository.findCompany(companyName);
  if (company) {
    throw new ApiError(httpStatus.BAD_REQUEST, "this company already exists");
  } else {
    try {
      const validFormat =
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/gif";
      if (!validFormat) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Wrong Image Format");
      }
      // untuk memisahkan nama file dengan extensifilenya
      const split = file.originalname.split(".");
      const ext = split[split.length - 1];

      // upload file ke imagekit
      const img = await imagekit.upload({
        file: file.buffer, //required
        fileName: `IMG-${Date.now()}.${ext}`, //required
      });

      const newCompany = {
        companyName,
        companyImage: img.url,
      };

      return await companyRepository.createCompany(newCompany);
    } catch (err) {
      throw new ApiError(httpStatus.BAD_REQUEST, err);
    }
  }
};

const getCompany = async () => {
  return await companyRepository.getCompany();
};

const getCompanyById = async (id) => {
  const company = await companyRepository.findCompanyById(id);

  if (!company) {
    throw new ApiError(httpStatus.NOT_FOUND, `company not found`);
  } else {
    return company;
  }
};

const updateCompany = async (companyName, file, id) => {
  const company = await companyRepository.findCompanyById(id);

  if (!companyName)
    throw new ApiError(httpStatus.BAD_REQUEST, "company name cannot be empty");

  if (!company) {
    throw new ApiError(httpStatus.NOT_FOUND, `company not found`);
  }

  if (file == null) {
    const newCompany = {
      companyName,
    };
    await companyRepository.updateCompany(newCompany, id);
  } else {
    const validFormat =
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif";
    if (!validFormat) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Wrong Image Format");
    }
    // untuk memisahkan nama file dengan extensifilenya
    const split = file.originalname.split(".");
    const ext = split[split.length - 1];

    // upload file ke imagekit
    const img = await imagekit.upload({
      file: file.buffer, //required
      fileName: `IMG-${Date.now()}.${ext}`, //required
    });

    const newCompany = {
      companyName,
      companyImage: img.url,
    };
    await companyRepository.updateCompany(newCompany, id);
  }

  return await companyRepository.findCompanyById(id);
};

const deleteCompany = async (id) => {
  const company = await companyRepository.findCompanyById(id);

  if (!company) {
    throw new ApiError(httpStatus.NOT_FOUND, `company not found`);
  } else {
    return await companyRepository.deleteCompany(id);
  }
};

module.exports = {
  createCompany,
  getCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
};
