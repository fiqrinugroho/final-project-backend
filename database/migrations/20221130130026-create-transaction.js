'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      paymentId: {
        type: Sequelize.INTEGER
      },
      ticketId: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      passengerId: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      transactionCode : {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      tripId: {
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};