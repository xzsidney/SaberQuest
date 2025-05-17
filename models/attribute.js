'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    levels: {
      type: DataTypes.JSON ,
      allowNull: true
    }
  }, {});
  
  Attribute.associate = function(models) {
    // Defina associações, se necessário
  };

  return Attribute;
};
