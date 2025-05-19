'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActionResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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