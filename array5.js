const fs = require('fs');
let j = 0;
console.log("====================================");
function f1(arr) {
  if (j < arr.length) {
    fs.readFile(arr[j], function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data.toString());
        j++;
        f1(arr);
        console.log("====================================");
      }
    });
  }
}
var arr = []
for (var i = 0; i < 5; i++) {
  arr.push(`/home/asd/nodejs_training/txtfiles/${i}.txt`);
}
f1(arr);

