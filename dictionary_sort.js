function ownSort(arr) {
  // Your sorting code

  for(var i=1;i<arr.length;i++){

    var j = i-1;
    var hurufSesudah = arr[i];
    var hurufSebelum = arr[j];
    var counter=0;
    debugger;
    while(hurufSebelum > hurufSesudah){
        arr[i-counter] = hurufSebelum;
        arr[j-counter] = hurufSesudah;

        if(arr[j-counter] == undefined){
          break;
        }
        counter++;
        hurufSesudah = arr[i-counter];
        hurufSebelum = arr[j-counter];
      }

  }
  return arr;
}

console.log(ownSort(['makan','duduk','tidur','terbang']));
console.log(ownSort(['angga','andhi','anggi','ani','asep','deni cagur','budi anduk']));
