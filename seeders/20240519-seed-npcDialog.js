'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NpcDialogs', [
  {
    "actionResultId": 1,
    "npcName": "Dona Cida",
    "npcType": "Funcion\u00e1ria",
    "dialogText": "Ufa, chegou correndo, hein? T\u00e1 suando! Mas \u00e9 bom ver um aluno com energia.",
    "npcMood": "neutra",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 2,
    "npcName": "Enfermeira Rosa",
    "npcType": "Funcion\u00e1ria",
    "dialogText": "Ih, caiu no corredor? Vamos cuidar disso. Primeiros dias s\u00e3o complicados mesmo.",
    "npcMood": "preocupada",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 3,
    "npcName": "L\u00edvia",
    "npcType": "Alune",
    "dialogText": "T\u00e1 perdido? Vem comigo, eu te levo at\u00e9 l\u00e1. A Secretaria \u00e9 meio escondida mesmo.",
    "npcMood": "amig\u00e1vel",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 4,
    "npcName": "Professor Carlos",
    "npcType": "Professor",
    "dialogText": "Voc\u00ea n\u00e3o devia estar aqui. A sala dos professores n\u00e3o \u00e9 lugar pra aluno n\u00e3o, viu?",
    "npcMood": "confuso",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 5,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Se eu passar pelo Bloco A e virar \u00e0 esquerda no p\u00e1tio, chego certinho. Bora.",
    "npcMood": "reflexivo",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 6,
    "npcName": "Funcion\u00e1rio da Manuten\u00e7\u00e3o",
    "npcType": "Funcion\u00e1rio",
    "dialogText": "Ei! Essa \u00e1rea \u00e9 s\u00f3 pra funcion\u00e1rios! Volta pro corredor, garoto!",
    "npcMood": "irritado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NpcDialogs', null, {});
  }
};
