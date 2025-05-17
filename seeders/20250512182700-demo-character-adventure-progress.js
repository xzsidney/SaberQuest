'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CharacterAdventureProgresses', [
      {
        characterId: 1,
        adventureId: 1,
        adventureCompleted: false,
        adventureAttempts: 1,
        actionId: 3,
        actionCompleted: true,
        startDate: new Date('2025-05-10T10:00:00Z'),
        endDate: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 1,
        adventureId: 1,
        adventureCompleted: false,
        adventureAttempts: 1,
        actionId: 4,
        actionCompleted: false,
        startDate: new Date('2025-05-10T11:00:00Z'),
        endDate: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 2,
        adventureId: 2,
        adventureCompleted: true,
        adventureAttempts: 2,
        actionId: null,
        actionCompleted: false,
        startDate: new Date('2025-05-09T15:00:00Z'),
        endDate: new Date('2025-05-09T18:00:00Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CharacterAdventureProgresses', null, {});
  }
};
