"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable("chats", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        contactId: {
          type: Sequelize.INTEGER,
          references: {
            model: "contacts",
            key: "id",
          },
        },
        adminId: {
          type: Sequelize.INTEGER,
          references: {
            model: "admin",
            key: "id",
          },
        },
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("chats");
  },
};
