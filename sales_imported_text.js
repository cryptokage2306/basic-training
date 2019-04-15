const food=['chocolate'];
const medical=['headache'];
const book=['book'];
const imported=['imported'];
let other=['perfume','music']
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
  for(let i of imported){
    if(body.indexOf(i)>-1){
      return parseFloat(quantity)*parseFloat(price)*0.05;
    }
  }
  return 0;
}
let imported_category=(body)=>{
  for(let i of imported){
    if(body.indexOf(i)>-1){
      return 'imported'
    }
  }
  return null;
}

let category=(body)=>{
  for(let i of food){
    if(body.indexOf(i)>-1){
      return 'food';
    }
  }
  for(let i of medical){
    if(body.indexOf(i)>-1)
    return 'medical';
  }
  for(let i of book){
    if(body.indexOf(i)>-1)
    return 'book';
  }
  for(let i of other){
    if(body.indexOf(i)>-1)
    return i;
  }
}
module.exports={
  sales_tax,
  imported_tax,
  category,
  imported_category
}
