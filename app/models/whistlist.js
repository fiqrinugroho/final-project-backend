'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class whistlist extends Model {
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
      
    }
  }
  whistlist.init({
    userId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'whistlist',
  });
  return whistlist;
};