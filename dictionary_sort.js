const readline = require('readline');
// your code here to initialize the program and take user input

function sortingArray(arr) {
    let index = 0;
    while (index != arr.length) {
        for(let i=index; i<arr.length; i++) {
            if(arr[index].toLowerCase() > arr[i].toLowerCase()) {
                let temp = arr[index]
                arr[index] = arr[i]
                arr[i] = temp
            }
        }
        index++
    }
    return arr.join(',')
}

var arrOfWord = ['makan','duduk','tidur','terbang']
var arrOfWord2 = ['anggi','angga','ani','adi']
console.log(sortingArray(arrOfWord))
console.log(sortingArray(arrOfWord2))

// module.exports = Dictionary
