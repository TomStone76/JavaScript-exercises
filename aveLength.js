// Create a function that takes in a sentence and 
// returns the average length of each word in that sentence. 
// Return a float value that is rounded to two decimal places.

function averageWordLength(str) {
    const reducer = (a, b) => a + b;
    let cleaned = str.replace(/\W_/g, '');
    // const mapped = cleaned.map(word => word.length);
    // return mapped / cleaned.length
    return cleaned;


}

let s = 'I just planted a young oak tree, wonder how tall it will grow in a few years?';

console.log(averageWordLength(s));