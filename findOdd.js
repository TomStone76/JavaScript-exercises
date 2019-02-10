// Create a function that takes an array and 
// finds the integer which appears an odd number of times.

let a = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]

function findOdd(arr) {
    let modArr = arr.sort(function(a, b){return a - b});
    let unique = Array.from(new Set(modArr));

    return modArr, unique
}

console.log(findOdd(a))