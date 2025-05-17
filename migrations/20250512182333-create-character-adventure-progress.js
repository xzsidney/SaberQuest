'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('CharacterAdventureProgresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      characterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Characters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      adventureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Adventures',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      adventureCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      adventureAttempts: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      actionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'AdventureActions',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      actionCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('CharacterAdventureProgresses');
  }
};
