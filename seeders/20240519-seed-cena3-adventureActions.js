'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AdventureActions', [
  {
    "name": "Correr at\u00e9 a Cantina",
    "description": "Voc\u00ea sai em disparada para tentar pegar o lanche antes da fila crescer.",
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
    "name": "Conversar com Colegas no Caminho",
    "description": "Voc\u00ea aproveita o caminho para puxar papo com outros alunos sobre a cantina.",
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
    "name": "Planejar o Caminho e Hor\u00e1rio",
    "description": "Voc\u00ea analisa a movimenta\u00e7\u00e3o e escolhe o melhor momento para ir \u00e0 cantina.",
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
