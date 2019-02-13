// Create a function that takes a string and returns the 
// number of alphanumeric characters that occur more than once.

function duplicateCount(str) {
    let count;

    let sorted = str.split('').sort();

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            count += 1;
        }
    }

    return count;
}