// Create a function that takes in a two-dimensional array and 
// returns the number of sub-arrays with identical elements.

function countIdentical(arr) {
    const check = arr.every((a) => a.length === 1);
    const filtered = arr.filter(function(a) {
        return a.every((x, y) => x === y[0]);
    })
    return (check ? arr.length : filtered.length);
}