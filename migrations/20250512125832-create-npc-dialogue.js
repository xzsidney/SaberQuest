'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NpcDialogues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      npcName: {
        type: Sequelize.STRING
      },
      physicalText: {
        type: Sequelize.TEXT
      },
      socialText: {
        type: Sequelize.TEXT
      },
      mentalText: {
        type: Sequelize.TEXT
      },
      type: {
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
    await queryInterface.dropTable('NpcDialogues');
  }
};
