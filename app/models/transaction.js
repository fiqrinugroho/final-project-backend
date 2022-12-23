'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: "userId",
      });
      this.belongsTo(models.ticket, {
        as:"from",
        foreignKey: "ticketFrom",
      });
      this.belongsTo(models.ticket, {
        as:"to",
        foreignKey: "ticketTo",
      });
      this.belongsTo(models.passenger, {
        foreignKey: "passengerId",
      });
      this.belongsTo(models.payment, {
        foreignKey: "paymentId",
      });
      this.belongsTo(models.typeTrip, {
        foreignKey: "tripId",
      });
      this.hasOne(models.history, { foreignKey: "transactionId" });
    }
  }
  transaction.init({
    userId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    ticketFrom: DataTypes.INTEGER,
    ticketTo: DataTypes.INTEGER,
    passengerId: DataTypes.INTEGER,
    transactionCode : DataTypes.STRING,
    status: DataTypes.STRING,
    tripId: DataTypes.INTEGER,
    totalPrice: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};