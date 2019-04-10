let sales_tax=function(obj){
  console.count("sales_tax");
  if(obj.category!="food"&&obj.category!="medical"&&obj.category!="book"){
    console.log("sales_tax"+obj.name);
    return obj.price*0.1;
  }
  return 0
}
let import_tax=function(obj){
  console.count("import_tax");
  if(obj.imported==true){
    console.log("import_tax"+obj.name);
    return obj.price*0.05;
  }
  return 0
}
let isimported=function(obj){
  console.count("isimported");
    if(obj.hasOwnProperty('imported')){
      if(obj["imported"]==true){
        return "imported";
      }
    }
    return "";
}
module.exports={
  "salestax":sales_tax,
  "importtax":import_tax,
  "isimported":isimported
};

