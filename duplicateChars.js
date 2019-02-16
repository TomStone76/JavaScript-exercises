// Create a function that takes a string and returns the 
// number of alphanumeric characters that occur more than once.

function duplicateCount(str) {
    let count = 0;

    let sorted = str.toLowerCase().split('').sort();

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            count++;
        }
    }

    let set1 = new Set(sorted);

    let newArr = Array.from(set1).length;

console.log(duplicateCount('Indivisibilities'));