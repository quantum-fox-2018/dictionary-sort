const readline = require('readline');

function Dictionary(str) {

	for (var i = 0; i < str.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < str.length; j++) {
			if (str[j] < str[min]) {
				min = j;
			}
		}
		if (min != i) {
			var tmp = str[i];
			str[i] = str[min];
			str[min] = tmp;
		}
	}
  return str
}

console.log(Dictionary(['makan','duduk','tidur','terbang']));
console.log(Dictionary(['anggi','angga','ani','adi']));

module.exports = Dictionary
