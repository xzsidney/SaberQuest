'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ActionResult extends Model {
    static associate(models) {
      ActionResult.hasOne(models.NpcDialog, {
        foreignKey: 'actionResultId',
        as: 'npcDialog'
      });

      ActionResult.belongsTo(models.AdventureAction, {
        foreignKey: 'successActionId',
        as: 'successAction'
      });

      ActionResult.belongsTo(models.AdventureAction, {
        foreignKey: 'failureActionId',
        as: 'failureAction'
      });
    }
  }

  ActionResult.init({
    name: DataTypes.STRING,
    testDescription: DataTypes.TEXT,
    difficulty: DataTypes.INTEGER,
    attributeUsed: DataTypes.STRING,
    className: DataTypes.STRING,
    successActionId: DataTypes.INTEGER,
    failureActionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ActionResult',
  });

  return ActionResult;
};
