// Create a function that takes a string and returns a new string with its first and last characters swapped, 
// except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".

function flipEndChars(str) {
    let len = str.length
    if ((typeof str === "string") && (str[0] !== str[len - 1])) {
        return   str.substring(len - 1) + str.substring(1, len - 1) + str[0]
    } else if (typeof str !== "string" || len < 2) {
        return "Incompatible."
    } else if (str[0] === str.substring(len - 1)) {
        return "Two's a pair."
    }
}