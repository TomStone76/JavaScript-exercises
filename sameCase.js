// Create a function that returns true if an input string 
// contains only uppercase or only lowercase letters.

function sameCase(str) {
    return (str === str.toUpperCase() || str === str.toLowerCase());
}