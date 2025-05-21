'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NpcDialogs', [
  {
    "actionResultId": 31,
    "npcName": "Professora L\u00facia",
    "npcType": "Professora",
    "dialogText": "Chegou a tempo. Pegue seu material e vamos come\u00e7ar.",
    "npcMood": "neutra",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 32,
    "npcName": "Professora L\u00facia",
    "npcType": "Professora",
    "dialogText": "Atrasado no primeiro dia? Espero que n\u00e3o vire h\u00e1bito.",
    "npcMood": "reprovadora",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 33,
    "npcName": "Aluna J\u00falia",
    "npcType": "Alune",
    "dialogText": "Vem comigo! T\u00f4 indo pra l\u00e1 tamb\u00e9m.",
    "npcMood": "amig\u00e1vel",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 34,
    "npcName": "Aluno Luiz",
    "npcType": "Alune",
    "dialogText": "Ih, eu tamb\u00e9m me perdi. Essa n\u00e3o \u00e9 a sala certa!",
    "npcMood": "confuso",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 35,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Voc\u00ea conferiu tudo e chegou na sala certo, antes do sinal.",
    "npcMood": "satisfeito",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 36,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Ao chegar na sala, descobre que ela foi transferida para outro bloco.",
    "npcMood": "desapontado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NpcDialogs', null, {});
  }
};
