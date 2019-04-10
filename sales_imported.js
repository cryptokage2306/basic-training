let salestax=(obj)=>{
  if(obj.category!="food"&&obj.category!="medical"&&obj.category!="book"){
    return parseFloat(obj.quantity)*parseFloat(obj.price)*0.1;
  }
  return 0
}
let importtax=(obj)=>{
  if(obj.imported==true){
    return parseFloat(obj.quantity)*parseFloat(obj.price)*0.05;
  }
  return 0
}
let isimported=(obj)=>{
    if(obj.hasOwnProperty('imported')){
      if(obj["imported"]==true){
        return "imported";
      }
    }
    return "";
}
module.exports={
  salestax,
  importtax,
  isimported
};
