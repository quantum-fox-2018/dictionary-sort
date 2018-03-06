const readline = require('readline');

function dictionary(input){
  for(let i=1; i<input.length; i++){
    for(let j=0; j<=i-1; j++){
      let front = input[j];
      let back = input[i];
      if(input[i]<input[j]){
        input[i] = front;
        input[j] = back;
      }
    }
  }
  return input;
}

var arrOfWord1 = ['makan','duduk','tidur','terbang'];
var arrOfWord2 = ['anggi','angga','ani','adi'];

console.log(dictionary(arrOfWord1));
console.log(dictionary(arrOfWord2));


module.exports = dictionary
