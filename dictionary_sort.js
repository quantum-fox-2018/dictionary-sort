// const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(value){
    let newArr = [];
    for(let i=0; i<value.length; i++){
        let minValue = value[i];
        for(let j=i+1; j<value.length; j++){
            if(value[j] < minValue){
                idxMin = j;
                minValue = value[j]
            }
        }
        if(minValue != value[i]){
            value[idxMin] = value[i]
            value[i] = minValue;
        }
    }
    return value.join(',');
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))


// module.exports = Dictionary
