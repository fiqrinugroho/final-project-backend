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
        foreignKey: "ticketId",
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
    ticketId: DataTypes.ARRAY(DataTypes.INTEGER),
    passengerId: DataTypes.ARRAY(DataTypes.INTEGER),
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