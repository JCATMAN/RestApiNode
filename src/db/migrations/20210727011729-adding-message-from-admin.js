"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn("messages", "isSendByAdmin", {
        type: Sequelize.BOOLEAN,
        default: false,
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
