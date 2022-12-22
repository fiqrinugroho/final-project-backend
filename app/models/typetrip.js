'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class typeTrip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaction, { foreignKey: "tripId" });
    }
  }
  typeTrip.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'typeTrip',
  });
  return typeTrip;
};