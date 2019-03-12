// Write a function that takes in a word and determines whether or not it is plural. 
// A plural word is one that ends in s.

function isPlural(word) {
    return word.split('').pop() === 's';
}