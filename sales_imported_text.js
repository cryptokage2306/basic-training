const food=['chocolate'];
const medical=['headache'];
const book=['book'];
const imported=['imported'];
let sales_tax=(quantity,body,price)=>{
  for(let i of food){
    if(body.indexOf(i)>-1){
      return 0;
    }
  }
  for(let i of medical){
    if(body.indexOf(i)>-1)
    return 0;
  }
  for(let i of book){
    if(body.indexOf(i)>-1)
    return 0;
  }
  return parseFloat(quantity)*parseFloat(price)*.1; 
}
let imported_tax=(quantity,body,price)=>{
  for(let i of food){
    if(body.indexOf(i)>-1){
      return parseFloat(quantity)*parseFloat(price)*0.05;
    }
  }
  return 0;
}
module.exports={
  sales_tax,
  imported_tax,
}
