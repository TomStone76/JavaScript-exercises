// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

function isFourLetters(arr) {
    var x = arr;
    var four = x.filter(words => words.length === 4);
    return four;
}