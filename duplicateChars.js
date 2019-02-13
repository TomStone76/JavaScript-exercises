// Create a function that takes a string and returns the 
// number of alphanumeric characters that occur more than once.

function duplicateCount(str) {
    let count;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count += 1;
        }
    }

    return count;
}