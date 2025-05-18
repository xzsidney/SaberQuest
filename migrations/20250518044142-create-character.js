'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      className: {
        type: Sequelize.STRING
      },
      biography: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.INTEGER
      },
      mana: {
        type: Sequelize.INTEGER
      },
      schoolGrade: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.INTEGER
      },
      dexterity: {
        type: Sequelize.INTEGER
      },
      constitution: {
        type: Sequelize.INTEGER
      },
      perception: {
        type: Sequelize.INTEGER
      },
      cognition: {
        type: Sequelize.INTEGER
      },
      willpower: {
        type: Sequelize.INTEGER
      },
      skills: {
        type: Sequelize.STRING
      },
      items: {
        type: Sequelize.JSON
      },
      playerId: {
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
    await queryInterface.dropTable('Characters');
  }
};