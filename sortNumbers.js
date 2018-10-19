// Create a function that takes an array of numbers and returns a new array, 
// sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If functions argument is null, an empty array or undefined, return an empty array.
// Return new array of sorted numbers.

function sortNumsAscending(arr) {
    if (arr === null) return [];
    arr.sort(function (a, b) {
        return a - b;
    });
        return arr;
}
