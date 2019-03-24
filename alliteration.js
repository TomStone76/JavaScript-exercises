// Alliteration refers to a sequence of words that begin with the same letter. 
// For this exercise, a sentence is correctly alliterated if all words strictly 
// greater than 3 characters begins with the same letter.

function alliterationCorrect(sentence) {
    const filtered = sentence.split(' ').filter(word => word.length > 3);
    const first = filtered.map(x => x[0]);
    let test = first.every((x, y, z) => x === z[0]);
    return test;
}