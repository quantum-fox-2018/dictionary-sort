const readline = require('readline');

var arrOfWord1 = ['makan','duduk','tidur','terbang'];
var arrOfWord2 = ['anggi','angga','ani','adi'];

function dictionary_sort (arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var temp = arr[i];
    var indexSwap = i;
    for (var x = i; x < arr.length; x++) {
      if (min[0] > arr[x][0]) {
        min = arr[x];
        indexSwap = x;
      } else if (min[0] === arr[x][0] && x > 0) {
        var limit;
        if (min.length < arr[x].length) {
          limit = min.length;
        } else {
          limit = arr[x].length;
        }
        for (var y = 0; y < limit; y++) {
          if(min[y] > arr[x][y]) {
            min = arr[x];
            indexSwap = x;
          }
        }
      }
    }
    arr[i] = min;
    arr[indexSwap] = temp;
  }

  return arr;
}

console.log(dictionary_sort(arrOfWord1));
console.log(dictionary_sort(arrOfWord2));


//module.exports = Dictionary
