

function flatten(unflatObject) {
    var toReturn = {};
      count=0;
      for (var i in unflatObject) {
          
          if ((typeof unflatObject[i]) == 'object') {
              
              var flatObject = flatten(unflatObject[i]);
              
              for (var x in flatObject) {
                  
                  
                  toReturn[i + '.' + x] = flatObject[x];
                  
              }
              
          } else {
              
              toReturn[i] = unflatObject[i];
              
          }
      }
      return toReturn;
  }


console.log(flatten({ "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }));