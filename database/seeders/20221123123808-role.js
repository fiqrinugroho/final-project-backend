"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("roles", [
      {
        id: 1,
        roleName: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        roleName: "Member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // async down(queryInterface, Sequelize) {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // },
};
