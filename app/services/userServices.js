const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const userRepository = require("../repositories/userRepository");

const getUserById = async (id) => {
  const user = await userRepository.findUser(id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, `user not found`);
  } else {
    await userRepository.updateUser(id);
    const getUser = await userRepository.findUser(id);

    return {
      id: getUser.id,
      firstName: getUser.firstName,
      lastName: getUser.lastName,
      address: getUser.profile.address,
      phoneNumber: getUser.profile.phoneNumber,
      avatar: getUser.profile.avatar,
      gender: getUser.profile.gender,
      createdAt: getUser.profile.createdAt,
      updatedAt: getUser.profile.updatedAt,
    };
  }
};

const updateUser = async (reqBody, id) => {
  const { firstName, lastName, address, phoneNumber, avatar, gender } = reqBody;
  const getUser = await userRepository.findUser(id);
  
  if (!getUser) {
    throw new ApiError(httpStatus.NOT_FOUND, `user not found`);
  } else {
    const user = { firstName, lastName };
    const fullName = firstName + " " + lastName;
    const profile = { fullName, address, phoneNumber, avatar, gender };
    await userRepository.updateUser(user, id);
    await userRepository.updateProfile(profile, id);
    const getNewUser = await userRepository.findUser(id);

    return {
      id: getNewUser.id,
      firstName: getNewUser.firstName,
      lastName: getNewUser.lastName,
      address: getNewUser.profile.address,
      phoneNumber: getNewUser.profile.phoneNumber,
      avatar: getNewUser.profile.avatar,
      gender: getNewUser.profile.gender,
      createdAt: getNewUser.profile.createdAt,
      updatedAt: getNewUser.profile.updatedAt,
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
