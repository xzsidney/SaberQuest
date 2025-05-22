'use strict';

module.exports = (sequelize, DataTypes) => {
  const Scene = sequelize.define('Scene', {
    title: DataTypes.STRING,
    firstAction: DataTypes.INTEGER,
    secondAction: DataTypes.INTEGER,
    thirdAction: DataTypes.INTEGER,
    failAction: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
    attributeUsed: DataTypes.STRING,
    npcId: DataTypes.INTEGER,
    environmentDescription: DataTypes.TEXT,
    characterFeeling: DataTypes.TEXT,
  }, {});

  Scene.associate = function(models) {
    Scene.belongsTo(models.Npc, { foreignKey: 'npcId', as: 'npc' });
  };

  return Scene;
};
