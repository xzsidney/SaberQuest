'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Adventures', [
      {
        name: 'Lost Treasure of the School',
        description: 'A legendary treasure hidden inside the school library.',
        difficulty: 'Medium',
        reward: 'Golden Medal',
        requirement: 'Must have completed the Math challenge.',
        level: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Haunted Classroom',
        description: 'Explore the abandoned classroom rumored to be haunted.',
        difficulty: 'Hard',
        reward: 'Ghost Hunter Badge',
        requirement: 'Must be level 5 or higher.',
        level: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Adventures', null, {});
  }
};
