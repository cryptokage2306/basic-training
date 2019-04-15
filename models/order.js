'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    orderName: DataTypes.STRING,
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    imported: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {});
  order.associate = function (models) {
    // associations can be defined here
  };
  return order;
};