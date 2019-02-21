// Create a function that accepts an array of two strings and checks if 
// the letters in the second string are present in the first string.

function letterCheck(arr) {
    let first = arr.shift().toLowerCase().split('');
    let second = arr.pop().toLowerCase().split('');
    let flag = true;
    for (let i = 0; i < second.length; i++) {
        if (!first.includes(second[i])) {
            flag = false;
        }
    }
    return flag;
}