// Write a function that takes three input values (a, b, c) and returns the number of equal values.

function equal(a, b, c) {
    let arr = [], counter = 0

    arr.push(a, b, c);

    for (let i = 0; i < arr.length; i++) {
        if (i[0] === i[1]) {
            counter++
        } else if (i[0] === i[2]) {
            counter++
        } else if (i[1] === i[2]) {
            counter++
        }
    }
    return counter
}

console.log(equal(1, 2, 3))
