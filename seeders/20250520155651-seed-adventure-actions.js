'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AdventureActions', [
      {
        name: 'Saiu com Agilidade',
        description: 'Você se esquiva da multidão e sai tranquilo pelos portões.',
        difficulty: 3,
        resultTest: true,
        physicalAction: null,
        socialAction: null,
        mentalAction: null,
        adventureId: 1,
        npcDialogId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tropeçou na Saída',
        description: 'Você se apressa demais e derruba a mochila no meio do caminho.',
        difficulty: 3,
        resultTest: true,
        physicalAction: null,
        socialAction: null,
        mentalAction: null,
        adventureId: 1,
        npcDialogId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Se Despediu com Amizade',
        description: 'Você dá tchau para todos e recebe sorrisos e despedidas calorosas.',
        difficulty: 3,
        resultTest: true,
        physicalAction: null,
        socialAction: null,
        mentalAction: null,
        adventureId: 1,
        npcDialogId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Despedida Fria',
        description: 'Você tenta se despedir, mas ninguém responde seu tchau.',
        difficulty: 3,
        resultTest: true,
        physicalAction: null,
        socialAction: null,
        mentalAction: null,
        adventureId: 1,
        npcDialogId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reflexão Positiva',
        description: 'Você pensa nas experiências do dia e sente que aprendeu muito.',
        difficulty: 3,
        resultTest: true,
        physicalAction: null,
        socialAction: null,
        mentalAction: null,
        adventureId: 1,
        npcDialogId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Confusão Mental',
        description: 'Você termina o dia confuso, sem entender muito bem o que viveu.',
        difficulty: 3,
        resultTest: true,
        physicalAction: null,
        socialAction: null,
        mentalAction: null,
        adventureId: 1,
        npcDialogId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AdventureActions', null, {});
  }
};
