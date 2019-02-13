// Write a function that takes a string and
// calculates the number of letters and digits within it. 
// Return the result as an object.

let x = "H3ll0 Wor1d";

function countAll(str) {
    let count = {
        "'LETTERS'": 0,
        "'DIGITS'": 0
    }

    let letters = [], nums=[];

    let formatted = str.split('').length

    for (let i = 0; i < formatted; i++) {
        if (typeof formatted[i] === 'string') {
            letters.push(formatted)
        }
    }

}



console.log(count);