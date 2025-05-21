'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AdventureActions', [
  {
    "name": "Procurar Ficha nos Arquivos",
    "description": "Voc\u00ea tenta encontrar sua ficha sozinho nos arquivos da secretaria.",
    "difficulty": 3,
    "resultTest": true,
    "physicalAction": 1,
    "socialAction": 0,
    "mentalAction": 0,
    "adventureId": 13,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Conversar com os Funcion\u00e1rios",
    "description": "Voc\u00ea tenta conversar com os funcion\u00e1rios da secretaria para agilizar o processo.",
    "difficulty": 3,
    "resultTest": true,
    "physicalAction": 0,
    "socialAction": 1,
    "mentalAction": 0,
    "adventureId": 13,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "name": "Conferir os Documentos Sozinho",
    "description": "Voc\u00ea analisa cuidadosamente toda a papelada para verificar se est\u00e1 tudo certo.",
    "difficulty": 3,
    "resultTest": true,
    "physicalAction": 0,
    "socialAction": 0,
    "mentalAction": 1,
    "adventureId": 13,
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AdventureActions', null, {});
  }
};
