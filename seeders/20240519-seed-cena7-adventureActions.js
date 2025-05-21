'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AdventureActions', [
  {
    "name": "Escapar da Multid\u00e3o",
    "description": "Voc\u00ea tenta sair da escola rapidamente antes da confus\u00e3o na sa\u00edda.",
    "difficulty": 3,
    "resultTest": true,
    "physicalAction": 1,
    "socialAction": 0,
    "mentalAction": 0,
    "adventureId": 13,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Se Despedir dos Colegas",
    "description": "Voc\u00ea tenta interagir com seus novos colegas antes de sair.",
    "difficulty": 3,
    "resultTest": true,
    "physicalAction": 0,
    "socialAction": 1,
    "mentalAction": 0,
    "adventureId": 13,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Refletir sobre o Dia",
    "description": "Voc\u00ea caminha lentamente e pensa sobre tudo o que viveu neste primeiro dia.",
    "difficulty": 3,
    "resultTest": true,
    "physicalAction": 0,
    "socialAction": 0,
    "mentalAction": 1,
    "adventureId": 13,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AdventureActions', null, {});
  }
};
