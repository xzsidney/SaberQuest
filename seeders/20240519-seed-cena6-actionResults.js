'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ActionResults', [
  {
    "name": "Chegou a Tempo",
    "testDescription": "Voc\u00ea chega na sala no \u00faltimo segundo, mas consegue entrar.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Atrasado e Advertido",
    "testDescription": "Voc\u00ea chega atrasado e leva uma advert\u00eancia da professora.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Ajudado por Colega",
    "testDescription": "Um colega te guia at\u00e9 a sala correta com simpatia.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Indicado para a Sala Errada",
    "testDescription": "Voc\u00ea segue o aluno errado e acaba na turma equivocada.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Orientado pelo Mapa",
    "testDescription": "Voc\u00ea usa o mapa e chega com organiza\u00e7\u00e3o e anteced\u00eancia.",
    "difficulty": 3,
    "attributeUsed": "cognition",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Sala Mudada",
    "testDescription": "O mapa est\u00e1 desatualizado, a sala foi trocada e voc\u00ea se perde.",
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
