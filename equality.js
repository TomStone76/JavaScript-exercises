// Write a function that takes three input values (a, b, c) and returns the number of equal values.

function equal(a, b, c) {
    let arr = [], counter = 0
    arr.push(a, b, c);
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[2]) {
            counter = 3
        } else if (arr[0] !== arr[1] && arr[1] !== arr[2] && arr[0] !== arr[2]) {
            counter = 0
        } else {
            counter = 2
        }
    }
    return counter
}