'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      this.belongsTo(models.role, {
        foreignKey: 'roleId',
      })
      this.belongsTo(models.profile, {
        foreignKey: 'id',
      })
    }
  }
  user.init({
    fristName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};