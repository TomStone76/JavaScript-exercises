// Write a function that takes a string and
// calculates the number of letters and digits within it. 
// Return the result as an object.

let x = "H3ll0 Wor1d";

function countAll(str) {
    let letters = [], numbers=[];

    const filtered = str.split('').filter(item => item != ' ');

    let count = {
        "LETTERS": letters.length,
        "DIGITS": numbers.length
    }

   return count;
}

console.log(countAll(x));