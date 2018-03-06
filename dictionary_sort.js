const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arrOfWord){

    for(let i=0; i<arrOfWord.length; i++){
        let minIdx = i

        for(let j=i+1; j<arrOfWord.length; j++){
            if(arrOfWord[minIdx].toLowerCase() > arrOfWord[j].toLowerCase()){
                minIdx = j
            }
        }
        let sorted = arrOfWord[i]
        arrOfWord[i] = arrOfWord[minIdx]
        arrOfWord[minIdx] = sorted
    }
    return arrOfWord.join(',').toLowerCase()
}

console.log(Dictionary(["makan","duduk","tidur","terbang"]));
console.log(Dictionary(["anggi","angga","ani","adi"]));
console.log(Dictionary(["Javascript","PHP","delphi","Ruby"]));

module.exports = Dictionary
