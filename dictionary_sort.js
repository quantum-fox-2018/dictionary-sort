const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(array){
  var tempWord
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if(array[j]>array[j+1]){
        tempWord=array[j+1].toUpperCase()
        array[j+1]=array[j].toUpperCase()
        array[j]=tempWord.toUpperCase()
      }
    }
  }
  console.log(array);
}

Dictionary(['makan','duduk','tidur','terbang'])
Dictionary(['anggi','angga','ani','adi'])

module.exports = Dictionary
