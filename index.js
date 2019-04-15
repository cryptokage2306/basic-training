const express=require('express');
const {connectionest,insert,order,updatereqres}=require('./sequelizeorder');
const Sequelize = require('sequelize');
const bodyParser=require('body-parser')
const app = express();
const tax = require('./sales_imported');
const text_tax = require('./sales_imported_text');
app.use("/", bodyParser.json());
app.use("/", bodyParser.text())
app.get("/",  (req, res) =>{
  console.count('homepage');
  res.sendFile('/home/asd/myapp/index.html',  (err) =>{
    if (err) {
      console.log(err);
    }
    else{
      connectionest();
    }
  });
});
app.post('/',  (req, res, next) =>{
  if (req.headers["content-type"] == "application/json") {
    console.log(req.body);
    var array = req.body.items;
    var str = []
    let total = 0;
    let sales = 0;
    let reqtime=new Date().getTime();
    for (let item of array) {
      str.push(`${item.quantity} ${tax.isimported(item)} ${item.name}: ${item.price + tax.salestax(item) + tax.importtax(item)}`);
      sales += tax.salestax(item) + tax.importtax(item);
      priceall=item.price + tax.salestax(item) + tax.importtax(item);
      total += item.price + tax.salestax(item) + tax.importtax(item);
      insert(req.body.name,item,priceall,tax.isimported(item))
    }
    res.json({
      "name":req.body.name,
      "stmt":str,
      "total":total,
      "sales":sales
    
    });
    console.dir({
      "name":req.body.name,
      "stmt":str,
      "total":total,
      "sales":sales
    
    })
    let restime=new Date().getTime();
    updatereqres(req.body.name,`${reqtime}`,`${restime}`);
    res.end();
  } if (req.headers["content-type"] == "text/plain") {
    next();
  }
},  (req, res) =>{
  let reqtime=new Date().getTime();
  let str = req.body;
  orderNo = str.split(":");
  sentences = orderNo[1].split("\\n");
  quantity = [];
  body = [];
  price = [];
  for (let i = 1; i < sentences.length; i++) {
    regex = new RegExp('(\\d+)');
    temp = sentences[i].split(regex);
    quantity.push(temp[1]);
    lastind=temp[2].lastIndexOf("at");
    body.push(temp[2].substr(0,lastind)+":");
    price.push(temp[3]+temp[4]+temp[5]);
  }
  stmt=[];
  total=0;
  sales=0
  for(let i=1;i<sentences.length;i++){
    sales+=text_tax.sales_tax(quantity[i-1],body[i-1],price[i-1])+text_tax.imported_tax(quantity[i-1],body[i-1],price[i-1]);
    aftertax=parseFloat(price[i-1])+text_tax.sales_tax(quantity[i-1],body[i-1],price[i-1])+text_tax.imported_tax(quantity[i-1],body[i-1],price[i-1]);
    stmt.push(`${quantity[i-1]} ${body[i-1]} ${aftertax}`);
    total+=aftertax;
    item={
      'name':body[i-1].split(':')[0],
      'category':text_tax.category(body[i-1]),
      'quantity':quantity[i-1]
    }
    insert(orderNo[0],item,aftertax,text_tax.imported_category(body[i-1]))
  }
  res.json({
    "name":orderNo[0],
    "stmt":stmt,
    "total":total,
    "sales":sales
  });
  let restime=new Date().getTime();
  updatereqres(orderNo[0],`${reqtime}`,`${restime}`);
  res.end("hello");
});
app.listen(3000);