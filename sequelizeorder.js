const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'postgres', 'test123', {
  hostname: 'localhost',
  dialect: 'postgres'
});
const order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  oname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  itemname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item_category: {
    type: Sequelize.STRING,
    allowNull: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  imported: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

function connectionest(){
  const sequelize = new Sequelize('test', 'postgres', 'test123', {
    hostname: 'localhost',
    dialect: 'postgres'
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  
  order.sync({force:true}).then(()=>console.log('TRUE Created'))
}

let insert=(name,item,total,isimport)=>{
  order.create({
    oname:name,
    itemname:item.name,
    item_category:item.category,
    quantity:item.quantity,
    price:total,
    imported:isimport
  }).then(()=>console.log('doneeee'));
}

module.exports={
  connectionest,
  insert,
  order
}

