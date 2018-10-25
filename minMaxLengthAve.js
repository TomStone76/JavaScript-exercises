// Create a function that takes an array of numbers and returns the following statistics:
// Minimum Value
// Maximum Value
// Sequence Length
// Average Value

function minMaxLengthAverage(arr) {
    var newArr = []
    var a = Math.min(arr);
    var b = Math.max(arr);
    var c = arr.length;
    var reduce = (acc, cVal) => acc + cVal;
    var d = reduce / c;
    newArr.push(a, b, c, d);
    return newArr;
    
}