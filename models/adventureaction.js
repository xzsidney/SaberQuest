'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdventureAction = sequelize.define('AdventureAction', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    difficulty: DataTypes.INTEGER,
    resultTest: DataTypes.BOOLEAN,
    physicalAction: DataTypes.INTEGER,
    socialAction: DataTypes.INTEGER,
    mentalAction: DataTypes.INTEGER,
    adventureId: DataTypes.INTEGER,
    npcDialogId: DataTypes.INTEGER
  }, {});

  AdventureAction.associate = function(models) {
    AdventureAction.belongsTo(models.Adventure, {
      foreignKey: 'adventureId',
      as: 'adventure'
    });

    AdventureAction.belongsTo(models.NpcDialog, {
      foreignKey: 'npcDialogId',
      as: 'npcDialog'
    });

    AdventureAction.belongsTo(models.ActionResult, {
      foreignKey: 'physicalAction',
      as: 'physical'
    });

    AdventureAction.belongsTo(models.ActionResult, {
      foreignKey: 'socialAction',
      as: 'social'
    });

    AdventureAction.belongsTo(models.ActionResult, {
      foreignKey: 'mentalAction',
      as: 'mental'
    });
  };

  return AdventureAction;
};
