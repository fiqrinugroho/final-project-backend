const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const userRepository = require("../repositories/userRepository");

const getUserById = async (id) => {
  const user = await userRepository.getUserById(id);

  return {
    id: user.id,
    fullName: user.fullName,
    address: user.address,
    phoneNumber: user.phoneNumber,
    avatar: user.avatar,
    gender: user.gender,
    updatedAt: user.updatedAt,
  };
};

const updateUser = async (reqBody, id) => {
  const user = await userRepository.getUserById(id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, `user not found`);
  } else {
    await userRepository.updateUser(reqBody, id);
    const getUser = await userRepository.getUserById(id);

    return {
      id: getUser.id,
      fullName: getUser.fullName,
      address: getUser.address,
      phoneNumber: getUser.phoneNumber,
      avatar: getUser.avatar,
      gender: getUser.gender,
      updatedAt: getUser.updatedAt,
    };
  }
};

const deleteUser = async (id) => {
  const user = await userRepository.getUserById(id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, `user not found`);
  } else {
    return await userRepository.deleteUser(id);
  }
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
};
