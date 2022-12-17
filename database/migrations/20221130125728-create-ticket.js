'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      departureDate: {
        type: Sequelize.DATE
      },
      departureTime: {
        type: Sequelize.TIME
      },
      arrivalDate: {
        type: Sequelize.DATE
      },
      arrivalTime: {
        type: Sequelize.TIME
      },
      flightFrom: {
        type: Sequelize.INTEGER
      },
      flightTo: {
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      seatNumber: {
        type: Sequelize.STRING
      },
      class: {
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
    await queryInterface.dropTable('tickets');
  }
};