// Create a function that takes an array of positive numbers and strings and returns a new array without the strings. 
// In other words, remove all strings from an array of elements.
// •Filter out all strings.
// •Return only numbers.

function filterArray(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}