/* eslint-disable max-len */
const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const notifRepository = require("../repositories/notifRepository");

const addNotification = async (userId, status, code) => {
  let message = "";

  if(status == "pending"){
    message = `Silahkan Lakukan Pembayaran Untuk Transaksi ${code} Agar Transaksi Anda Dapat Segera di Proses`;

  }else if(status == "success"){
    message = `Transaksi Berhasil, Pembayaran Untuk Transaksi ${code} Berhasil di Proses, Selamat Menikmati Penerbangan Anda`;

  }else if(status == "canceled"){
    message = `Transaksi Dibatalkan, Transaksi Dengan Kode ${code} Telah Dibatalkan`;
  }
  const notif = {userId, message,};
  const result = await notifRepository.addNotif(notif);
  return await notifRepository.getNotifById(userId, result.id);
};

const  createNotification = async (userId, message) => {
  const notif = {userId, message,};
  const result = await notifRepository.addNotif(notif);
  return await notifRepository.getNotifById(userId, result.id);
};

const getNotification = async (userId) => {
  return await notifRepository.getNotif(userId);
};
  
const getNotificationById = async (userId, id) => {
  const find = await notifRepository.getNotifById(userId, id);
  if(!find){
    throw new ApiError(httpStatus.NOT_FOUND, "notification not found");
  }
};

module.exports = {
  addNotification,
  getNotification,
  getNotificationById,
  createNotification,
};
  