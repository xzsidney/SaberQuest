'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AdventureActions', [
      {
        name: 'Search the bookshelves',
        description: 'You search carefully between the old books.',
        difficulty: 2,
        resultTest: true,
        physicalAction: 1,
        socialAction: 0,
        mentalAction: 3,
        adventureId: 1, // ID correspondente ao 'Lost Treasure of the School'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Negotiate with the ghost',
        description: 'Try to calm the ghost and make it talk.',
        difficulty: 4,
        resultTest: false,
        physicalAction: 0,
        socialAction: 4,
        mentalAction: 2,
        adventureId: 2, // ID correspondente ao 'The Haunted Classroom'
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AdventureActions', null, {});
  }
};

