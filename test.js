function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for (var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }
console.log(bubbleSort([1, 10, 8, 3, 9, 2, 4, 7, 5, 6]));