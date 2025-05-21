'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ActionResults', [
  {
    "name": "Conseguiu o Lanche",
    "testDescription": "Voc\u00ea avan\u00e7a bem na fila e consegue pegar seu lanche favorito.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Derrubou a Bandeja",
    "testDescription": "Voc\u00ea esbarra em algu\u00e9m e derruba seu lanche no ch\u00e3o.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Atendimento Especial",
    "testDescription": "O atendente te reconhece e oferece um lanche extra.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Pedido Errado",
    "testDescription": "Voc\u00ea se enrola na conversa e recebe o pedido errado.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Lanche Nutritivo Escolhido",
    "testDescription": "Voc\u00ea faz uma \u00f3tima escolha e sai satisfeito.",
    "difficulty": 3,
    "attributeUsed": "cognition",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Escolha Ruim",
    "testDescription": "Voc\u00ea escolhe um lanche pesado e se sente mal depois.",
    "difficulty": 3,
    "attributeUsed": "cognition",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ActionResults', null, {});
  }
};
