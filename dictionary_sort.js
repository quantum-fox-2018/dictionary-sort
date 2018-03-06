const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arrOfWord) {

  for (let i in arrOfWord) {
    for (let j in arrOfWord) {
      if (arrOfWord[i] < arrOfWord[j]) {
        var temp = arrOfWord[i];
        arrOfWord[i] = arrOfWord[j];
        arrOfWord[j] = temp;
      }
    }
  }

  return arrOfWord;
}

console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang']));
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi']));

module.exports = Dictionary
