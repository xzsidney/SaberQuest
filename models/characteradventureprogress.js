'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterAdventureProgress extends Model {
    static associate(models) {
      // Pertence a Character
      CharacterAdventureProgress.belongsTo(models.Character, {
        foreignKey: 'characterId',
        as: 'character',
      });

      // Pertence a Adventure
      CharacterAdventureProgress.belongsTo(models.Adventure, {
        foreignKey: 'adventureId',
        as: 'adventure',
      });

      // Pertence a Action (AdventureAction)
      CharacterAdventureProgress.belongsTo(models.AdventureAction, {
        foreignKey: 'actionId',
        as: 'action',
      });
    }
  }
  CharacterAdventureProgress.init({
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adventureId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adventureCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    adventureAttempts: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    actionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    actionCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'CharacterAdventureProgress',
    tableName: 'CharacterAdventureProgresses'
  });
  return CharacterAdventureProgress;
};
