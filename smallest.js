// Create a function that takes an array of numbers
// and returns the sum of the two lowest positive numbers.



// let duplicates = sorted.filter(function(x, y) {
//     return sorted.indexOf(x) >= y;
// });

var arr = [3, 1, 4, 2, 5]

function sumTwoSmallestNums(arr) {
    let x = arr.sort()
    let y = []
    y.push(x.shift())
    y.push(x.shift())
    return y
}

console.log(sumTwoSmallestNums(arr))