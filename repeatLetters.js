// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
    let newStr = '';
    for (let i = 0, n = str.split('').length; i < n ; i++) {
        newStr += str[i] + str[i];
    }
    return newStr;
}