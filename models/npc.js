'use strict';

module.exports = (sequelize, DataTypes) => {
  const Npc = sequelize.define('Npc', {
    npcName: DataTypes.STRING,
    npcType: DataTypes.STRING,
    dialogText: DataTypes.TEXT,
    npcMood: DataTypes.STRING,
  }, {});

  Npc.associate = function(models) {
    Npc.hasMany(models.Scene, { foreignKey: 'npcId', as: 'scenes' });
  };

  return Npc;
};
