const express=require('express');
const bodyParser=require('body-parser')
const app = express();
const tax=require('./sales_imported');
const text_tax=require('./sales_imported_text');
app.use("/",bodyParser.json());
app.use("/",bodyParser.text())
app.get("/", function (req, res) {
  console.count('homepage');
  res.sendFile('/home/asd/myapp/index.html', function (err) {
    if (err) {
      console.log(err);
    }
  });
});
app.post('/',function(req,res,next){
  if(req.headers["content-type"]=="application/json"){
    console.log(req.headers["content-type"])
    var array=req.body.items;
    var str= []
    let total=0;
    let sales=0;
    console.dir(array);

    for (let i = 0; i < array.length; i++) {
      str.push(`${array[i].quantity} ${tax.isimported(array[i])} ${array[i].name}: ${array[i].price+tax.salestax(array[i])+tax.importtax(array[i])}`);
      sales+=tax.salestax(array[i])+tax.importtax(array[i]);
      total+=array[i].price+tax.salestax(array[i])+tax.importtax(array[i]);
    }
    console.dir(str);
    console.log(total);
    res.json({
      "name":req.body.name,
      "stmt":str,
      "total":total,
      "sales":sales
    
    });
    res.end();
  } if(req.headers["content-type"]=="text/plain"){
    console.log(2121212);
    next();
  }
},function(req,res){
  let str=req.body;
  console.dir(str);
  orderNo=str.split(":");
  sentences=orderNo[1].split("\\n");
  quantity=[];
  body=[];
  price=[];
  for(let i=1;i<sentences.length;i++){
    regex=new RegExp('(\\d+)');
    temp=sentences[i].split(regex);
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
  }
  res.json({
    "name":orderNo[0],
    "stmt":stmt,
    "total":total,
    "sales":sales
  });

  res.end("hello");
});
app.listen(3000);