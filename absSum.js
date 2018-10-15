// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) {
    var newArr =[];
    const reducer = (accumulator, currentVal) => accumulator + currentVal;
    var x = newArr.reduce(reducer);
    for (i = 0; i < arr.length; i++) {
        var abs = Math.abs(arr[i]);
        newArr.push(abs);
    }
    return x;
}