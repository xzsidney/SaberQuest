'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Archetype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Archetype.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    bonus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Archetype',
  });
  return Archetype;
};