'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Scenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstAction: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      secondAction: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      thirdAction: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      failAction: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      difficulty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      attributeUsed: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      npcId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Npcs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      environmentDescription: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      characterFeeling: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Scenes');
  },
};
