'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adventure = sequelize.define('Adventure', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    difficulty: DataTypes.STRING,
    reward: DataTypes.STRING,
    requirement: DataTypes.TEXT,
    level: DataTypes.INTEGER
  }, {});
  Adventure.associate = function(models) {
    Adventure.hasMany(models.AdventureAction, {
      foreignKey: 'adventureId',
      as: 'actions',
      onDelete: 'CASCADE'
    });
  };
  return Adventure;
};
