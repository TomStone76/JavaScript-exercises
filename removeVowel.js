// Create a function that takes a string and 
// returns a new string with all vowels removed.

function remove(str) {
    var x = str.replace(/[aeiou]/g, "");
    return x
}