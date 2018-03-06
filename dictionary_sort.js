const readline = require('readline');
// your code here to initialize the program and take user input
function dictionrySort(input) {

  for (let i = 0; i < input.length; i++) {

    for (let j = i; j < input.length; j++) {

      let temp = input[i]

      if (input[i] > input[j]) {

        input[i] = input[j]

        input[j] = temp

      }

    }

  }

return input;

}

console.log(dictionrySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionrySort(['anggi', 'angga', 'ani', 'adi']));


// module.exports = Dictionary
