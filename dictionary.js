function arrOfWord(arr){
    done = false;
    while(!done){
        done = true;
        for(let i = 0; i < arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                done = false;
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }


    return arr.join(',');
}





console.log(arrOfWord(['makan', 'duduk', 'tidur', 'terbang']));// duduk,makan,terbang,tidur
console.log(arrOfWord(['anggi', 'angga', 'ani', 'adi'])); // adi,angga,anggi,ani
