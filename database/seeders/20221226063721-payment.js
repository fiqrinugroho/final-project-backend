'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert("payments", [
      {
        id: 1,
        bankLogo: "https://ik.imagekit.io/mfn/Bank_Logo/BRI.png",
        bankName: "Bank Rakyat Indonesia (BRI)",
        accountName: "Lets Flight Indonesia",
        accountNumber: "324525142882575",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        bankLogo: "https://ik.imagekit.io/mfn/Bank_Logo/mandiri.png",
        bankName: "Bank Mandiri",
        accountName: "Lets Flight Indonesia",
        accountNumber: "1795430028166",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        bankLogo: "https://ik.imagekit.io/mfn/Bank_Logo/BCA.png",
        bankName: "Bank Central Asia (BCA)",
        accountName: "Lets Flight Indonesia",
        accountNumber: "7723450983",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        bankLogo: "https://ik.imagekit.io/mfn/Bank_Logo/BNI.png",
        bankName: "Bank Negara Indonesia (BNI)",
        accountName: "Lets Flight Indonesia",
        accountNumber: "7723450983",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        bankLogo: "https://ik.imagekit.io/mfn/Bank_Logo/gopay.png",
        bankName: "GOPAY",
        accountName: "Lets Flight Indonesia",
        accountNumber: "087774254729",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        bankLogo: "https://ik.imagekit.io/mfn/Bank_Logo/dana.png",
        bankName: "DANA",
        accountName: "Lets Flight Indonesia",
        accountNumber: "087774254729",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        bankLogo: "https://ik.imagekit.io/mfn/Bank_Logo/dana.png",
        bankName: "OVO",
        accountName: "Lets Flight Indonesia",
        accountNumber: "087774254729",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
