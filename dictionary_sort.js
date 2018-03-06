const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(arr){
  for (let i = 0; i < arr.length; i++) {
    let tmp = i;
    for (let j = i-1; j >= 0; j--) {
      if(arr[j] > arr[tmp]){
        let temp = arr[tmp];
        arr[tmp] = arr[j];
        arr[j] = temp;
        tmp = j;
      }
    }
	}
  return arr
}
console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang']));
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi']));
module.exports = Dictionary
