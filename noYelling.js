// Create a function that transforms sentences ending with multiple question marks ? 
// or exclamation marks ! into a sentence only ending with one.

function noYelling(phrase) {
    let arr = phrase.split(' ')
    let start = arr.slice(0, -1), end = phrase.split(' ').pop();
    let clean = end.replace(/\W/g, '');
    return clean
}

console.log(noYelling('Oh my fucking god!!!!!'));