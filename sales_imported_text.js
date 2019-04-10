const food=['chocolate'];
const medical=['headache'];
const book=['book'];
const imported=['imported'];
let sales_tax=function(quantity,body,price){
  for(let i=0;i<food.length;i++){
    if(body.indexOf(food[i])>-1){
      return 0;
    }
  }
  for(let i=0;i<medical.length;i++){
    if(body.indexOf(medical[i])>-1)
    return 0;
  }
  for(let i=0;i<book.length;i++){
    if(body.indexOf(book[i])>-1)
    return 0;
  }
  return parseFloat(quantity)*parseFloat(price)*.1; 
}
let imported_tax=function(quantity,body,price){
  for(let i=0;i<imported.length;i++){
    if(body.indexOf(imported[i])>-1){
      return parseFloat(quantity)*parseFloat(price)*0.05;
    }
  }
  return 0;
}
module.exports={
  "sales_tax":sales_tax,
  "imported_tax":imported_tax,
}
