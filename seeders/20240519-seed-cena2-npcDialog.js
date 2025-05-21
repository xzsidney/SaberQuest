'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NpcDialogs', [
  {
    "actionResultId": 7,
    "npcName": "Dona Cida",
    "npcType": "Funcion\u00e1ria",
    "dialogText": "Achei que voc\u00ea ia se perder nesses arquivos, mas se virou bem!",
    "npcMood": "surpresa",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 8,
    "npcName": "Seu Paulo",
    "npcType": "Funcion\u00e1rio",
    "dialogText": "Opa! Cuidado com esses pap\u00e9is, agora vai ter que me ajudar a arrumar!",
    "npcMood": "irritado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 9,
    "npcName": "Dona Cida",
    "npcType": "Funcion\u00e1ria",
    "dialogText": "Muito bem! Que bom que perguntou. T\u00e1 tudo certo por aqui.",
    "npcMood": "am\u00e1vel",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 10,
    "npcName": "Funcion\u00e1rio Ocupado",
    "npcType": "Funcion\u00e1rio",
    "dialogText": "Agora n\u00e3o posso falar... volta daqui a pouco.",
    "npcMood": "ocupado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 11,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Voc\u00ea respira fundo, revisa tudo, e percebe que est\u00e1 tudo certo.",
    "npcMood": "neutro",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 12,
    "npcName": "Dona Cida",
    "npcType": "Funcion\u00e1ria",
    "dialogText": "Faltou essa autoriza\u00e7\u00e3o aqui. Voc\u00ea precisa pedir para os respons\u00e1veis assinarem.",
    "npcMood": "s\u00e9ria",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NpcDialogs', null, {});
  }
};
