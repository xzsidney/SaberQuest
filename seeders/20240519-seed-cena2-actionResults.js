'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ActionResults', [
  {
    "name": "Ficha Encontrada",
    "testDescription": "Voc\u00ea encontra sua ficha sozinho nos arquivos da secretaria.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Bagun\u00e7a nos Arquivos",
    "testDescription": "Voc\u00ea derruba os arquivos, causando confus\u00e3o.",
    "difficulty": 3,
    "attributeUsed": "strength",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Atendido com Simpatia",
    "testDescription": "Os funcion\u00e1rios te atendem com simpatia e ajudam rapidamente.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Ignorado na Secretaria",
    "testDescription": "Os funcion\u00e1rios est\u00e3o ocupados e mal respondem suas perguntas.",
    "difficulty": 3,
    "attributeUsed": "willpower",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Documentos Corretos",
    "testDescription": "Voc\u00ea confere tudo direitinho e percebe que est\u00e1 tudo em ordem.",
    "difficulty": 3,
    "attributeUsed": "cognition",
    "className": "general",
    "successActionId": null,
    "failureActionId": null,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Faltou Autoriza\u00e7\u00e3o",
    "testDescription": "Voc\u00ea percebe que esqueceu um documento importante.",
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
