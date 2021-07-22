"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable("messages", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        message: {
          type: Sequelize.STRING,
        },
        time: {
          type: Sequelize.DATE,
        },
        contactId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "contacts",
            key: "id",
          },
        },
        adminId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "admin",
            key: "id",
          },
        },
        chatId: {
          type: Sequelize.INTEGER,
          references: {
            model: "chats",
            key: "id",
          },
        },
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("messages");
  },
};
