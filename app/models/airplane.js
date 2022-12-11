'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ticket, { foreignKey: "airplaneId" });
      this.belongsTo(models.company, {
        foreignKey: "companyId",
      });
    }
  }
  airplane.init({
    airplaneName: DataTypes.STRING,
    airplaneCode: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    seatCapacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'airplane',
  });
  return airplane;
};