// Create a function that takes an array of numbers and
// return the first and last elements as a new array.

function firstLast(arr) {
    let newArr = [];
    newArr.push(arr[0]);
    newArr.push(arr[arr.length - 1]);
    return newArr;
}
