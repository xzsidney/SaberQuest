'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NpcDialogues', [
      {
        npcName: 'Old Librarian',
        physicalText: 'Why would you want to fight an old librarian? I can barely lift a book!',
        socialText: 'Welcome to the library, young one. What knowledge do you seek?',
        mentalText: 'Books are like portals. Enter carefully.',
        type: 'friendly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        npcName: 'Angry Ghost',
        physicalText: 'Get out of here before I throw a chair at you!',
        socialText: 'You dare talk to me? I was the top student!',
        mentalText: 'My mind is filled with ancient formulas... want to challenge them?',
        type: 'angry',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NpcDialogues', null, {});
  }
};
