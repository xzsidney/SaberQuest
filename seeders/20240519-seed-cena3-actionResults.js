'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ActionResults', [
  {
    "name": "Chegou Primeiro na Fila",
    "testDescription": "Voc\u00ea corre e consegue chegar \u00e0 cantina antes da multid\u00e3o.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Escorregou no Corredor",
    "testDescription": "Voc\u00ea escorrega ao correr e se atrasa para a cantina.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Novos Amigos no Caminho",
    "testDescription": "Voc\u00ea conversa com colegas e chega acompanhado \u00e0 cantina.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Zombado no Corredor",
    "testDescription": "Alguns veteranos zombam de voc\u00ea e voc\u00ea se atrasa.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Chegada Estrat\u00e9gica",
    "testDescription": "Voc\u00ea analisa o tempo certo e evita filas na cantina.",
    "difficulty": 3,
    "attributeUsed": "cognition",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Fila Gigante",
    "testDescription": "Voc\u00ea erra o hor\u00e1rio e encontra a cantina lotada.",
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
