'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.transaction, { foreignKey: "passengerId" });
    }
  }
  passenger.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    NIK: DataTypes.INTEGER,
    brithDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'passenger',
  });
  return passenger;
};