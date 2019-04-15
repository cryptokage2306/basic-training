const Sequelize = require('sequelize');
const order = require('./models').order;
let insert=(name,item,total,isimport)=>{
  order.create({
    orderName:name,
    itemName:item.name,
    itemCategory:item.category,
    quantity:item.quantity,
    price:total,
    imported:(isimport==""||isimport==null)?null:isimport
  }).then(()=>console.log('doneeee'));
}


module.exports={
  insert
}

