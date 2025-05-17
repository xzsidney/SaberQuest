'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      manaCost: {
        type: Sequelize.INTEGER
      },
      healthCost: {
        type: Sequelize.INTEGER
      },
      damage: {
        type: Sequelize.INTEGER
      },
      range: {
        type: Sequelize.INTEGER
      },
      archetypes: {
        type: Sequelize.STRING // Pode ser um array futuramente se precisar
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
    await queryInterface.dropTable('Skills');
  }
};
