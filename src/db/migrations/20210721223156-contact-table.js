"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable("contacts", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        fullname: {
          type: Sequelize.STRING,
        },
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("contacts");
  },
};
