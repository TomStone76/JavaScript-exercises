// Create a function that takes an array of numbers
// and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr) {
    let x = arr.sort(), y = []
    y.push(x.shift())
    y.push(x.shift())
    const reducer = (accumulator, currentVal) => accumulator + currentVal
    let z = y.reduce(reducer)
    return z
}