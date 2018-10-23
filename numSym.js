// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.
// A number is symmetrical when it is the same as its reverse.

function isSymmetrical(num) {
    var x = num.toString()
    var sym = x.split("").reverse().join("");
    if (x === sym) {
        return true;
    } else {
        return false;
    }
}

console.log(isSymmetrical(122221));

//Thanks to https://stackoverflow.com/questions/38188696/trying-to-find-if-a-number-is-a-palindrome-in-js for help with the syntax.