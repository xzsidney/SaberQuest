'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ActionResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      testDescription: {
        type: Sequelize.TEXT
      },
      difficulty: {
        type: Sequelize.INTEGER
      },
      attributeUsed: {
        type: Sequelize.STRING
      },
      className: {
        type: Sequelize.STRING
      },
      successActionId: {
        type: Sequelize.INTEGER
      },
      failureActionId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ActionResults');
  }
};