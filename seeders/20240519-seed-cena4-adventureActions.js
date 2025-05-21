'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AdventureActions', [
  {
    "name": "Disputar Espa\u00e7o na Fila",
    "description": "Voc\u00ea tenta avan\u00e7ar na fila da cantina com agilidade.",
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
    "name": "Conversar com o Atendente",
    "description": "Voc\u00ea tenta puxar conversa com o atendente para ter um atendimento especial.",
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
    "name": "Escolher a Melhor Refei\u00e7\u00e3o",
    "description": "Voc\u00ea analisa as op\u00e7\u00f5es dispon\u00edveis e tenta escolher o lanche mais nutritivo.",
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
