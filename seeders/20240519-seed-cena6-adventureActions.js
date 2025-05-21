'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AdventureActions', [
  {
    "name": "Correr para Chegar na Aula",
    "description": "Voc\u00ea corre pelos corredores tentando n\u00e3o se atrasar para a aula final.",
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
    "name": "Pedir Ajuda para Achar a Sala",
    "description": "Voc\u00ea pergunta a um colega se sabe onde \u00e9 a pr\u00f3xima aula.",
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
    "name": "Usar o Hor\u00e1rio e o Mapa",
    "description": "Voc\u00ea confere o hor\u00e1rio das aulas e o mapa da escola para se localizar.",
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
