'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      // Cada personagem pertence a um único usuário
      Character.belongsTo(models.User, {
        foreignKey: 'playerId',
        as: 'User'
      });

      // Exemplo de outro relacionamento que você já tem
      Character.hasMany(models.CharacterAdventureProgress, {
        foreignKey: 'characterId'
      });
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
    playerId: DataTypes.INTEGER // <- importante para a associação com o usuário
  }, {
    sequelize,
    modelName: 'Character',
  });

  return Character;
};
