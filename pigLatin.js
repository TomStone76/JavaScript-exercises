// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

function pigLatin(str) {
    let f = str.substring(0, str.length - 1).toLowerCase().split(' ');
    let arr = [];

    for (let i = 0; i < f.length; i++) {
        if (f[i][0].match(/[aeiou]/g)) {
            arr.push(f[i] + 'way');
        } else {
            arr.push(f[i].slice(1, f[i].length) + f[i][0] + 'ay');
        }
    }

    let t = arr.join(' ') + str.charAt(str.length - 1);
    return t[0].toUpperCase() + t.substring(1, t.length);
}

console.log(pigLatin('Yaasss queen slay!'));