'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NpcDialog extends Model {
    static associate(models) {
      NpcDialog.belongsTo(models.ActionResult, {
        foreignKey: 'actionResultId',
        as: 'actionResult'
      });
    }
  }

  NpcDialog.init({
    npcName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    npcType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dialogText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    npcMood: {
      type: DataTypes.STRING,
      allowNull: true
    },
    actionResultId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'NpcDialog',
  });

  return NpcDialog;
};
