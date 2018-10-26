// Create a function that takes an array of numbers and returns the following statistics:
// Minimum Value
// Maximum Value
// Sequence Length
// Average Value

function minMaxLengthAverage(arr) {
    var newArr = [];
    var a = Math.min(...arr);
    var b = Math.max(...arr);
    var c = arr.length;
    const reducer = (accumulator, value) => (accumulator + value);
    var d = arr.reduce(reducer);
    var e = d/c
    newArr.push(a);
    newArr.push(b);
    newArr.push(c);
    newArr.push(e);
    return newArr;
}