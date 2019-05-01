// Create a function that takes an array of names and 
// returns an array with the first letter capitalized.

function capMe(arr) {
    const cap = arr.map(x => x[0].toUpperCase() + 
    x.substring(1, x.length).toLowerCase());
    return cap;
}