// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

function isFourLetters(arr) {
    var four = arr.filter(words => words.length === 4);
    return four;
}

const x = ["peach", "pear", "apple", "plum", "orange", "banana"];

console.log(isFourLetters(x));