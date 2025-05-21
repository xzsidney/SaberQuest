'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NpcDialogs', [
  {
    "actionResultId": 19,
    "npcName": "Tia Zuleide",
    "npcType": "Funcion\u00e1ria",
    "dialogText": "Chegou na hora certa! Aqui est\u00e1 seu misto quente, quentinho!",
    "npcMood": "feliz",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 20,
    "npcName": "Aluno Aleat\u00f3rio",
    "npcType": "Alune",
    "dialogText": "Eita! Que tomb\u00e3o! Vai precisar pegar outro lanche.",
    "npcMood": "assustado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 21,
    "npcName": "Atendente Jo\u00e3o",
    "npcType": "Funcion\u00e1rio",
    "dialogText": "Pra voc\u00ea, um p\u00e3o de queijo extra. Bons alunos merecem refor\u00e7o!",
    "npcMood": "amig\u00e1vel",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 22,
    "npcName": "Atendente Jo\u00e3o",
    "npcType": "Funcion\u00e1rio",
    "dialogText": "Ah, foi isso que voc\u00ea pediu? Opa... agora j\u00e1 foi.",
    "npcMood": "confuso",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 23,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Voc\u00ea escolheu um lanche equilibrado e saboroso. Boa escolha!",
    "npcMood": "neutro",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 24,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Logo depois de comer, seu est\u00f4mago reclama... m\u00e1 ideia.",
    "npcMood": "preocupado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NpcDialogs', null, {});
  }
};
