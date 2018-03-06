const readline = require('readline');
// your code here to initialize the program and take user input
function sortDictionary(arr){
    for(let counter =0; counter<arr.length; counter++){
        for(let counter2 = counter; counter2<arr.length; counter2++){
            if(arr[counter]>arr[counter2]){
                let temp = arr[counter];
                arr[counter] = arr[counter2];
                arr[counter2] = temp;
            }
        }
    }
    return arr;
}

console.log(sortDictionary(['makan','duduk', 'tidur', 'terbang']));
console.log(sortDictionary(['anggi','angga', 'ani', 'adi']));


module.exports = sortDictionary
