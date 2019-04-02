// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

function pigLatin(str) {
    let formatted = str.substring(0, str.length - 1).toLowerCase().split(' ');

    const mapped = formatted.map(function(word) {
        let subArr = word.split('');
        let move = word.slice(1, word.length) + word[0] + 'ay'; // everything BUT the first letter
        return move
    })

    return mapped;
}

let test1 = "Cats are great pets.";

console.log(pigLatin(test1));