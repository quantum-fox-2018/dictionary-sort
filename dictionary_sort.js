const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort (arrOfWord) {

    for (var i = 0; i < arrOfWord.length; i++) {
    
        var temp = arrOfWord[i]
        var j = i-1
    
        while (j >= 0 && arrOfWord[j] > temp) {
    
          arrOfWord[j+1] = arrOfWord[j]
          j--
        }
    
        arrOfWord[j+1] = temp
      }

      return arrOfWord
}

console.log(dictionarySort(['makan', 'dudul', 'tidur', 'terbang']))
console.log(dictionarySort(['adi', 'angga', 'anggi', 'ani']))

// module.exports = Dictionary
