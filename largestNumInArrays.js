// Create a function that takes an array of arrays with numbers. 
// Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
    var newArr = [];
   for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < arr[i].length; j++) {
           var m = Math.max(arr[i][j]);
       }
   }

}