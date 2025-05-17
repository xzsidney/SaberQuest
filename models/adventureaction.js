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
    adventureId: DataTypes.INTEGER
  }, {});
  AdventureAction.associate = function(models) {
    AdventureAction.belongsTo(models.Adventure, {
      foreignKey: 'adventureId',
      as: 'adventure'
    });
  };
  return AdventureAction;
};
