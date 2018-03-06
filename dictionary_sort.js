const readline = require('readline');
// your code here to initialize the program and take user input
function ownSort(arr) {
  // Your sorting code

  for (var i = 0; i < arr.length; i++) {
    var position = -1;
    var lowest = arr[i];

    for (var j = i; j < arr.length; j++) {
      if (lowest > arr[j]) {
        lowest = arr[j];
        position = j;
      }
    }

    if(position > -1){
      var temp = arr[i];
      arr[i] = arr[position];
      arr[position] = temp;
    }
  }

  return arr;
}

function dictionarySort(array){
  return ownSort(array).join()
}

console.log(dictionarySort(["anggi", "angga", "ani", "adi"]));
console.log(dictionarySort(["makan", "duduk", "tidur", "terbang"]));
//module.exports = Dictionary
