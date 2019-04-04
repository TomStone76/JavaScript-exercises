// Create a function that takes in a sentence and 
// returns the average length of each word in that sentence. 
// Return a float value that is rounded to two decimal places.

function averageWordLength(str) {
    const reducer = (a, b) => a + b;
    let cleaned = str.replace(/[^\w\s]/gi, '').split('');
    const mapped = cleaned.map(word => word.length);
    return cleaned;
}

let s = 'I just planted a, tree?';

console.log(averageWordLength(s));