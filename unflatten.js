function unflatten(flatObject) {
    // Write your code here
    temp={};
      for(var key in flatObject){
          array=key.split('.');
          
          var ret=function(obj,array,count){
              if(count<array.length-1){
                  if(typeof obj[array[count]] =='object'){
                      obj[array[count]];
                      ret(obj[array[count]],array,count+1);
                  }
                  else{
                      obj[array[count]]={};
                      ret(obj[array[count]],array,count+1);
                  }
          
              }
              else{
                  obj[array[count]]=flatObject[key];
              }
              
              return obj;
          }
          var extend= function(obj, src) {
              for (var key in src) {
                  if (src.hasOwnProperty(key)) obj[key] = src[key];
              }
              return obj;
          }
          temp=extend(ret(temp,array,0),temp);
      }
      return temp; 
  }