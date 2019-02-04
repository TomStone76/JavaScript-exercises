// Create a function that takes an array of numbers between 1 and 10 
// (excluding one number) and returns the missing number.

function missingNums(arr) {
    const reducer = (accumulator, currentVal) => accumulator + currentVal
    let sum = arr.reduce(reducer)
    return 55 - sum

}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]))