'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('NpcDialogs', 'actionResultId');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('NpcDialogs', 'actionResultId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'ActionResults',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  }
};
