const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr.join(',');
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));

//module.exports = Dictionary
