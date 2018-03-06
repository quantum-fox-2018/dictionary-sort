const readline = require('readline');
// your code here to initialize the program and take user input
function dictionary(arr) {
  var temp;

 for(var i = 0; i < arr.length; i++){
     var min = i;

     for(var j = i + 1; j < arr.length; j++) {
       if(arr[j] < arr[min]) {
         min = j;
       }
     }
     temp = arr[i];
     arr[i] = arr[min];
     arr[min] = temp;
 }
  return arr.join();
}

console.log(dictionary(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionary(['anggi', 'angga', 'ani', 'adi']));
module.exports = dictionary
