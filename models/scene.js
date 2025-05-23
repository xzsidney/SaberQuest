'use strict';

module.exports = (sequelize, DataTypes) => {
  const Scene = sequelize.define('Scene', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstAction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    secondAction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thirdAction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    failAction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attributeUsed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    npcId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Npcs',
        key: 'id'
      }
    },
    environmentDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    characterFeeling: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    consequence: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hasNpcDialog: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'Scenes'
  });

  Scene.associate = function(models) {
    Scene.belongsTo(models.Npc, {
      foreignKey: 'npcId',
      as: 'npc'
    });
  };

  return Scene;
};
