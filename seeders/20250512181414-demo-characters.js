'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Characters', [
      {
        name: 'Arthas',
        level: 5,
        experience: 1500,
        playerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaina',
        level: 3,
        experience: 800,
        playerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thrall',
        level: 4,
        experience: 1200,
        playerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
