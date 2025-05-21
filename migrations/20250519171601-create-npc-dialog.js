'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NpcDialogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actionResultId: {
        type: Sequelize.INTEGER
      },
      npcName: {
        type: Sequelize.STRING
      },
      npcType: {
        type: Sequelize.STRING
      },
      dialogText: {
        type: Sequelize.TEXT
      },
      npcMood: {
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
    await queryInterface.dropTable('NpcDialogs');
  }
};