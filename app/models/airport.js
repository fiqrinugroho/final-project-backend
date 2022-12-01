'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ticket, { foreignKey: "flightFrom" });
      this.hasMany(models.ticket, { foreignKey: "flightTo" });
    }
  }
  airport.init({
    airportName: DataTypes.STRING,
    city: DataTypes.STRING,
    cityCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'airport',
  });
  return airport;
};