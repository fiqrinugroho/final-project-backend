"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: "userId",
      });
    }
  }
  profile.init(
    {
      userId: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      address: DataTypes.TEXT,
      phoneNumber: DataTypes.STRING,
      avatar: DataTypes.TEXT,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
