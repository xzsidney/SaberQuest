'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('NpcDialogs', 'actionResultId', {
      type: Sequelize.INTEGER,
      allowNull: true, // <-- permite nulo para evitar erro
      references: {
        model: 'ActionResults',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('NpcDialogs', 'actionResultId');
  }
};
