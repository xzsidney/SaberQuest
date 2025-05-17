'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AdventureActions', {
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
      difficulty: {
        type: Sequelize.INTEGER
      },
      resultTest: {
        type: Sequelize.BOOLEAN
      },
      physicalAction: {
        type: Sequelize.INTEGER
      },
      socialAction: {
        type: Sequelize.INTEGER
      },
      mentalAction: {
        type: Sequelize.INTEGER
      },
      adventureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Adventures',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('AdventureActions');
  }
};
