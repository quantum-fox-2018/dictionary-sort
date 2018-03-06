const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr){
  for (var i = 0; i < arr.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min != i) {
			var temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
  return String(arr);
}

console.log(dictionarySort(['makan','duduk','tidur','terbang']));
//duduk,makan,terbang,tidur
console.log(dictionarySort(['anggi','angga','ani','adi']));
//adi,angga,anggi,ani
//module.exports = Dictionary
