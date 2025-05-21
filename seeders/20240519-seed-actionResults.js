'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ActionResults', [
  {
    "name": "Chegada Suada",
    "testDescription": "Voc\u00ea chega \u00e0 secretaria, ofegante mas pontual.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Queda no Corredor",
    "testDescription": "Voc\u00ea escorrega e cai, sendo levado para a enfermaria.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Ajuda de Colega",
    "testDescription": "Uma veterana simp\u00e1tica te leva at\u00e9 a secretaria.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Dire\u00e7\u00e3o Errada",
    "testDescription": "Voc\u00ea entra por engano na sala dos professores.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Rota Estrat\u00e9gica",
    "testDescription": "Voc\u00ea analisa corretamente o mapa e chega \u00e0 secretaria sem dificuldade.",
    "difficulty": 3,
    "attributeUsed": "cognition",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "\u00c1rea T\u00e9cnica Proibida",
    "testDescription": "Voc\u00ea interpreta mal o mapa e entra numa \u00e1rea restrita.",
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
