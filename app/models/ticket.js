'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.airport, {
        as:"origin",
        foreignKey: "flightFrom",
      });
      this.belongsTo(models.airport, {
        as:"destination",
        foreignKey: "flightTo",
      });
      this.belongsTo(models.airplane, {
        foreignKey: "airplaneId",
      });
      this.hasMany(models.transaction, { foreignKey: "ticketId" });
      this.hasMany(models.whistlist, { foreignKey: "ticketId" });
    }
  }
  ticket.init({
    code: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    departureTime: DataTypes.TIME,
    arrivalDate: DataTypes.DATE,
    arrivalTime: DataTypes.TIME,
    flightFrom: DataTypes.INTEGER,
    flightTo: DataTypes.INTEGER,
    airplaneId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    seatNumber: DataTypes.STRING,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ticket',
  });
  return ticket;
};