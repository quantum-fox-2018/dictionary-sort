const readline = require('readline');
// your code here to initialize the program and take user input

function dictionary(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array.join(', ')
}

console.log(dictionary(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionary(['anggi', 'angga', 'ani', 'adi']))


// module.exports = Dictionary
