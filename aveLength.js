// Create a function that takes in a sentence and 
// returns the average length of each word in that sentence. 
// Return a float value that is rounded to two decimal places.

function averageWordLength(str) {
    const reducer = (a, b) => a + b;
    const sum = str.substring(0, str.length - 1).split(' ');
    const mapped = sum.map(word => word.length);
    return parseFloat((mapped.reduce(reducer) / mapped.length).toFixed(2));
}

let s = 'The small pup gnawed a hole in the sock.';

console.log(averageWordLength(s));