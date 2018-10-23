// Create a function that takes two strings as arguments and return either 
// true or false depending on whether the number of their charcters is equal or not.

function comp(str1, str2) {
    var x = str1.length, y = str2.length;
    if (x === y) {
        return true;
    } else {
        return false;
    }
}