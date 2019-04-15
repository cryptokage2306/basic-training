'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(
      [
        queryInterface.addColumn('orders', 'itemName', {
          type: Sequelize.STRING,
          allowNull: false
        }),
        queryInterface.addColumn('orders', 'itemCategory', {
          type: Sequelize.STRING,
          allowNull: false
        }),
        queryInterface.addColumn('orders', 'quantity', {
          type: Sequelize.INTEGER,
          allowNull: false
        }),
        queryInterface.addColumn('orders', 'price', {
          type: Sequelize.FLOAT,
          allowNull: false
        }),
        queryInterface.addColumn('orders', 'imported', {
          type: Sequelize.STRING,
          allowNull: true
        })
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      [
        queryInterface.removeColumn('orders', 'itemName'),
        queryInterface.removeColumn('orders', 'itemCategory'),
        queryInterface.removeColumn('orders', 'quantity'),
        queryInterface.removeColumn('orders', 'price'),
        queryInterface.removeColumn('orders', 'imported')
      ]
    )
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity. ,.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
