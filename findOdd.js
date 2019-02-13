// Create a function that takes an array and 
// finds the integer which appears an odd number of times.

let a = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]

function findOdd(arr) {
    let sorted = arr.sort(function(a, b){return a - b});
    return sorted
}

console.log(findOdd(a))