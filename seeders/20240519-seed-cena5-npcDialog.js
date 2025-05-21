'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NpcDialogs', [
  {
    "actionResultId": 25,
    "npcName": "Treinador Diego",
    "npcType": "Funcion\u00e1rio",
    "dialogText": "Voc\u00ea tem talento! J\u00e1 pensou em jogar no nosso time da escola?",
    "npcMood": "entusiasmado",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 26,
    "npcName": "Enfermeira Rosa",
    "npcType": "Funcion\u00e1ria",
    "dialogText": "Vamos colocar gelo nesse tornozelo. Nada de correr por hoje.",
    "npcMood": "cuidadosa",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 27,
    "npcName": "Veterano Lucas",
    "npcType": "Alune",
    "dialogText": "Relaxa, senta aqui com a gente. Qualquer d\u00favida sobre a escola, \u00e9 s\u00f3 perguntar.",
    "npcMood": "acolhedor",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 28,
    "npcName": "Veterano Z\u00e9",
    "npcType": "Alune",
    "dialogText": "Olha s\u00f3 quem chegou! O sabich\u00e3o do primeiro ano!",
    "npcMood": "zombeteiro",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 29,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Voc\u00ea observa os grupos, entende as tribos e sabe onde se encaixar.",
    "npcMood": "neutro",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  },
  {
    "actionResultId": 30,
    "npcName": "Narrador",
    "npcType": "Narrador",
    "dialogText": "Mesmo com aten\u00e7\u00e3o, voc\u00ea n\u00e3o consegue se conectar. O p\u00e1tio parece vazio.",
    "npcMood": "melanc\u00f3lico",
    "createdAt": "2025-05-19T19:47:32.610641",
    "updatedAt": "2025-05-19T19:47:32.610641"
  }
], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NpcDialogs', null, {});
  }
};
