function calculateFrequency(string) {
    let toReturn ={};
    for (let i = 0; i < string.length; i++) {
        if(string.charCodeAt(i)>96 && string.charCodeAt(i)<123){
            toReturn[string.charAt(i)]=0;
        }
        
        
    }
    for (let i = 0; i < string.length; i++) {
        if(string.charCodeAt(i)>96 && string.charCodeAt(i)<123){
            toReturn[string.charAt(i)]=toReturn[string.charAt(i)]+1;
        }
        
    }
    return toReturn;
  }
  console.log(calculateFrequency("u@#d$fkj$#!kds"));