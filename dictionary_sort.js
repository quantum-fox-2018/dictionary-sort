const readline = require('readline');
// your code here to initialize the program and take user input

// function dictionary(arr) {
//   // your code here
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       var first = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = first;
//       i = -1;
//     }
//   }
//   return arr;
// }

function dictionary(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      var first = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = first;
      }
    }
  }
  return arr;
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
var arrOfName = ['anggi', 'angga', 'ani', 'adi'];

console.log(dictionary(arrOfWord)); //duduk,makan,terbang,tidur
console.log(dictionary(arrOfName)); //adi,angga,anggi,ani

module.exports = {
  dictionary
}
