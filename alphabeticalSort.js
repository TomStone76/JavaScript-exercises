// A word is alphabetically sorted if all of the letters 
// in it are in consecutive alphabetical order. 
// Some examples of alphabetically sorted words: 
// abhors (a is before b, b is before h, h is before o, etc.), 
// ghost, accent, hoop.

// Create a function that takes in a sentence as input and returns 
// true if there is at least one alphabetically sorted word inside 
// that has a minimum length of 3.

function isAlphabeticallySorted(sentence) {
    let a = sentence.substring(0, sentence.length - 1).split(' ');
    let f = a.filter(w => w.length >= 3 && w.split('').sort().join('') == w);
    return f.length >= 1;
}
