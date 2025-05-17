'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CharacterAdventureProgresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      characterId: {
        type: Sequelize.INTEGER
      },
      adventureId: {
        type: Sequelize.INTEGER
      },
      adventureCompleted: {
        type: Sequelize.BOOLEAN
      },
      adventureAttempts: {
        type: Sequelize.INTEGER
      },
      actionId: {
        type: Sequelize.INTEGER
      },
      actionCompleted: {
        type: Sequelize.BOOLEAN
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('CharacterAdventureProgresses');
  }
};