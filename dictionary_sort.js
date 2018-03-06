const readline = require('readline');

function Dictionary(arrWords) {
// console.log(arrWords);

    let arrInput = [];
    for (let j = 0; j < arrWords.length; j++) {
        let arrResult = [];
        for (let i = 0; i < arrWords[j].length; i++) {
            arrResult.push(arrWords[j][i].toLowerCase());
        }
        // console.log(arrResult.join(''));
        arrInput.push(arrResult.join(''));
        // console.log(arrResult);
    }
    // console.log(arrInput);

    // your code here to initialize the program and take user input
    let arrSortResult = [];

    while (arrInput.length > 0) {
        let index = findIndexMin(arrInput); // 1
        arrSortResult.push(arrInput[index]);
        arrInput.splice(index,1);
    }

    return arrSortResult;

    function findIndexMin(arrInput) {
        let Min = arrInput[0];
        let IndexMin = 0;
        for (let i = 0; i < arrInput.length; i++) {
            if (arrInput[i] < Min) {
                Min = arrInput[i];
                IndexMin = i;
            }
        }
        return IndexMin;
    } 
    
}

let arrOfWord = ['makan','duduk','tidur','Terbang']; // duduk,makan,terbang,tidur
console.log(Dictionary(arrOfWord));



module.exports = Dictionary
