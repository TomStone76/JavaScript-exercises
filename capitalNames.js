// Create a function that takes an array of names and 
// returns an array with the first letter capitalized.

let names = ['steve', 'mIkE', 'jOHN'];

function capMe(arr) {
    const cap = arr.map(x => x[0].toUpperCase());
    return cap.join(' ');
}

console.log(capMe(names));