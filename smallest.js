// Create a function that takes an array of numbers
// and returns the sum of the two lowest positive numbers.



// let duplicates = sorted.filter(function(x, y) {
//     return sorted.indexOf(x) >= y;
// });

function sumTwoSmallestNums(arr) {
    var sorted = arr.sort(function(a, b){return a - b});
    return sorted
}

console.log(sumTwoSmallestNums([1, 9, 2, 8, 3]));