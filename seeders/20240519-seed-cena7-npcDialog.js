'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NpcDialogs', [
  {
    "actionResultId": 37,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Voc\u00ea dribla a multid\u00e3o e sai pelos port\u00f5es sentindo a brisa da liberdade.",
    "npcMood": "orgulhoso",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 38,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Ao trope\u00e7ar, sua mochila abre e pap\u00e9is voam por todo lado. Que fim de dia!",
    "npcMood": "engra\u00e7ado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 39,
    "npcName": "Colegas da Classe",
    "npcType": "Alune",
    "dialogText": "At\u00e9 amanh\u00e3! Foi legal te conhecer!",
    "npcMood": "feliz",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 40,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Voc\u00ea acena para os outros... mas ningu\u00e9m responde. A sa\u00edda parece fria.",
    "npcMood": "desconfort\u00e1vel",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 41,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Ao passar pelos port\u00f5es, voc\u00ea sorri. Foi um come\u00e7o de jornada cheio de aprendizados.",
    "npcMood": "reflexivo",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 42,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Voc\u00ea caminha olhando para o ch\u00e3o. Foi um dia estranho... Mas ainda \u00e9 s\u00f3 o come\u00e7o.",
    "npcMood": "neutro",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NpcDialogs', null, {});
  }
};
