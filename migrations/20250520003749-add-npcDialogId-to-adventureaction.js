'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('AdventureActions', 'npcDialogId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'NpcDialogs',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('AdventureActions', 'npcDialogId');
  }
};
