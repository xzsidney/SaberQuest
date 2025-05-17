'use strict';
module.exports = (sequelize, DataTypes) => {
  const NpcDialogue = sequelize.define('NpcDialogue', {
    npcName: DataTypes.STRING,
    physicalText: DataTypes.TEXT,
    socialText: DataTypes.TEXT,
    mentalText: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {});
  NpcDialogue.associate = function(models) {
    // Não há associação direta por enquanto, mas pode futuramente ligar com NPCs ou aventuras.
  };
  return NpcDialogue;
};
