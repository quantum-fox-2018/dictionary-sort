const readline = require('readline');
// your code here to initialize the program and take user input
function sort(arr) {
  var min = 0;
  for(var i = 1; i < arr.length; i++) {
    for(var j = i; j >=0 ; j--) {
      if(arr[j] < arr[j-1]) {
        min = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = min;
      }
    }
  }
  return arr;
}

console.log(sort(["makan", "duduk", "tidur", "terbang"]));
console.log(sort(["anggi", "angga", "ani", "adi"]));

module.exports = Dictionary
