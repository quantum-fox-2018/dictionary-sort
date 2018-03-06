// const readline = require('readline');
// your code here to initialize the program and take user input

// module.exports = Dictionary
function DictionarySort(arr){
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      var tmp = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr
}

// var arrOfWord = ['makan','duduk','tidur','terbang']
var arrOfWord = ['anggi','angga','ani','adi']
console.log(DictionarySort(arrOfWord))
