// Create a function that takes an array of numbers
// and returns the sum of the two lowest positive numbers.



// let duplicates = sorted.filter(function(x, y) {
//     return sorted.indexOf(x) >= y;
// });

var arr = [12, 435, 234, 123, 643, 658, 124]

function sumTwoSmallestNums(arr) {
    let x = arr.sort(), y = []
    y.push(x.shift())
    y.push(x.shift())
    const reducer = (accumulator, currentVal) => accumulator + currentVal
    let z = y.reduce(reducer)
    return z
}

console.log(sumTwoSmallestNums(arr))