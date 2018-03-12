const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr){
  var count1 = 0
  while(count1 < arr.length){
    var value = arr[count1]
    var count2 = count1 -1
    while(count2 >=0 && arr[count2] > value){
      arr[count2+1] = arr[count2]
      count2 --
    }
    arr[count2+1] = value
    count1++
  }
  return arr
}

console.log(dictionarySort(['makan', 'dudul', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))
module.exports = dictionarySort
