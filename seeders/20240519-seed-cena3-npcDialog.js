'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NpcDialogs', [
  {
    "actionResultId": 13,
    "npcName": "Tia Zuleide",
    "npcType": "Funcion\u00e1ria",
    "dialogText": "Chegou r\u00e1pido, hein? Vai querer o misto ou o p\u00e3o de queijo?",
    "npcMood": "alegre",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 14,
    "npcName": "Colega Aleat\u00f3rio",
    "npcType": "Alune",
    "dialogText": "Ih, caiu de novo? Voc\u00ea t\u00e1 colecionando tombos hoje!",
    "npcMood": "zombeteiro",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 15,
    "npcName": "Nando",
    "npcType": "Alune",
    "dialogText": "Senta com a gente! A gente te mostra o que \u00e9 bom na cantina!",
    "npcMood": "amig\u00e1vel",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 16,
    "npcName": "Veterano Z\u00e9",
    "npcType": "Alune",
    "dialogText": "Olha o novato a\u00ed achando que \u00e9 gente! Vai pra fila, campe\u00e3o!",
    "npcMood": "zombeteiro",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 17,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Voc\u00ea espera o momento ideal, caminha sem pressa e evita a muvuca.",
    "npcMood": "neutro",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 18,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Quando voc\u00ea chega, j\u00e1 tem uma fila que dobra a esquina da cantina...",
    "npcMood": "desanimado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NpcDialogs', null, {});
  }
};
