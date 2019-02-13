// Write a function that takes a string and
// calculates the number of letters and digits within it. 
// Return the result as an object.

let x = "H3ll0 Wor1d";

function countAll(str) {
    let letters = [], numbers=[];

    let formatted = str.split('').length

    for (let i = 0; i < formatted; i++) {
        if (typeof formatted[i] === 'string') {
            letters.push(formatted[i]);
        } else if (typeof formatted[i] === 'number') {
            numbers.push(formatted[i]);
        }
    }

    let count = {
        "'LETTERS'": letters.length,
        "'DIGITS'": numbers.length
    }

    return count
}



console.log(count);