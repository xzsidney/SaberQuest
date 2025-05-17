'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // Associações (se houver) vão aqui
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    durability: DataTypes.INTEGER,
    bonus: DataTypes.JSON,
    archetype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
