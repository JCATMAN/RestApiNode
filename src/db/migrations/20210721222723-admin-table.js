"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable("admin", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        fullname: {
          type: Sequelize.STRING,
        },
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("admin");
  },
};
