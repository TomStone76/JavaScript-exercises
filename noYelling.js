// Create a function that transforms sentences ending with multiple question marks ? 
// or exclamation marks ! into a sentence only ending with one.

function noYelling(phrase) {
    // let clean = phrase.replace(/\W/g, '');
    let start = phrase.split(' ')
    let end = phrase.split(' ').pop();
    if (end.endsWith('!') || end.endsWith('?')) {

    }
    return ending;
}