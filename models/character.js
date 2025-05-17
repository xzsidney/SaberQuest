'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      Character.belongsTo(models.User, { foreignKey: 'playerId' });
      Character.hasMany(models.CharacterAdventureProgress, { foreignKey: 'characterId' });
      // Você pode adicionar mais relações conforme evoluir (Inventário, Equipamentos, etc.)
    }
  }
  Character.init({
    name: DataTypes.STRING,
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    experience: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    playerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};
