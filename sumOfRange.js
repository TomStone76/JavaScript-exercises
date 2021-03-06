// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, 
// and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
// Run the example program and see whether it does indeed return 55.

function findRange(start, end) {
    const range = (start, end) => { 
        Array.from({ length: (end - start) / 1 }, (_, i) => start (i * 1))
    }
    return range
}

function sum(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return arr.reduce(reducer)
}

