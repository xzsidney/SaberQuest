module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Scenes', 'consequence', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('Scenes', 'hasNpcDialog', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Scenes', 'consequence');
    await queryInterface.removeColumn('Scenes', 'hasNpcDialog');
  }
};
