// You have an array of item codes with the following format: "[letters][digits]"

// Create a function that splits these strings into their alphabetic and numeric parts.

function splitCode(item) {
    let n = parseInt(item.replace(/\D/g, '')), c = item.replace(n, '');
    let arr = []; arr.push(c); arr.push(n);
    return arr;
}