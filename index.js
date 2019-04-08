const express=require('express');
const bodyParser=require('body-parser')
const app = express();
const tax=require('./sales_imported');
app.use("/",bodyParser.json());
app.use("/",bodyParser.text())
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
  
});
app.listen(3000);