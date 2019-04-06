// Create a function that takes a phrase and transforms each word using the following rules:

// Keep first and last character the same.
// Transform middle characters into a dash -.

function partiallyHide(phrase) {
    let arr = [];
    let f = phrase.split(' ');
    const m = f.map(word => word.split(''));

    for (let i = 0; i < m.length; i++) {
        if (m[i].length <= 2) {
            arr.push(m[i]);
        } else if (m[i].length > 2) {
            let first = m[i].charAt(0);
            let last = m[i].charAt(m[i].length - 1);
            if ()
        }
    }
}

let s = 'The small pup gnawed a hole in the sock';

console.log(partiallyHide(s));