const fs = require("fs");

// fs.readFile("../lessons-arrays.js", function(error, data){
//   if(error) {
//     console.log(error);
//   }
//   data = data.toString();
//   fs.writeFile("correctlyStorage.js", data, function(error) {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("Записано");
    
//   })
// })
// console.log('готово');

let text = fs.readFileSync("../lessons-arrays.js", "utf-8");
let arr = text.split('888').toString();

fs.writeFile("correctlyStorage.js", arr, () => {
  console.log('записано');
  
});

console.log(arr);
