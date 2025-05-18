'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      // Relação: Character pertence a um User
      Character.belongsTo(models.User, {
        foreignKey: 'playerId',
        as: 'player' // apelido da relação
      });
    }
  }

  Character.init({
    name: DataTypes.STRING,
    className: DataTypes.STRING,
    biography: DataTypes.TEXT,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    mana: DataTypes.INTEGER,
    schoolGrade: DataTypes.STRING,
    strength: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    constitution: DataTypes.INTEGER,
    perception: DataTypes.INTEGER,
    cognition: DataTypes.INTEGER,
    willpower: DataTypes.INTEGER,
    skills: DataTypes.STRING,
    items: DataTypes.JSON,
    playerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character',
  });

  return Character;
};
