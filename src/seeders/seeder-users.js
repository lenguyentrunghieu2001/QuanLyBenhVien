"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "lenguyentrunghieu2001@gmail.com",
        password: 123456,
        firstName: "Le Nguyen",
        lastName: "Trung Hieu",
        address: "VIETNAM",
        phonenumber: "1",
        gender: 1,
        image: "1",
        roleId: "1",
        positionId: "1",
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
