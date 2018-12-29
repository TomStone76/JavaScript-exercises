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

let x = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(minMaxLengthAverage(x));

//logs [ 10, 100, 10, 55 ]