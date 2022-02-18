"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Le Nguyen",
        lastName: "Trung Hieu",
        email: "lenguyentrunghieu2001@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Le Nguyen",
        lastName: "Trung",
        email: "lenguyentrunghieu2001@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
