// Create a function that counts the number of syllables a word has. 
// Each syllable is separated with a dash -.

function numberSyllables(word) {
    let numDash = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "-") {numDash++};
    }
    return numDash + 1;
}

console.log(numberSyllables('on-o-mat-o-poe-ia'))