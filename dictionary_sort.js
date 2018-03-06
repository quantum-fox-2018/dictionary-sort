const readline = require('readline');
// your code here to initialize the program and take user input
function arrOfWord (arr){
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
          if (arr[i] < arr[j]) {
              var awal = arr[i];
              arr[i] = arr[j];
              arr[j] = awal;
          }
      }
  }
  return arr;
}

console.log(arrOfWord(['makan','duduk','tidur','terbang']))
console.log(arrOfWord(['anggi','angga','ani','andi']))

module.exports = Dictionary
