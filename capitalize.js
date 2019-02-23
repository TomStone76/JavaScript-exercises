// Create a function that takes a string as an argument and 
// converts the first character of each word to uppercase. 
// Return the newly formatted string.

function makeTitle(str) {
    var arr = str.split(' ');
    const capital = arr.map(x => x[0].toUpperCase() + x.substring(1));
    return capital.join(' ');
}