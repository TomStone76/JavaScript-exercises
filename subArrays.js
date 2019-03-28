// Create a function that takes in a two-dimensional array and 
// returns the number of sub-arrays with identical elements.

function countIdentical(arr) {
    const check = arr.every((a) => a.length === 1);
    const filtered = arr.filter(function(a) {
        return a.every((x, y, z) => x === z[0]);
    })

    // if (check) {
    //     return arr.length;
    // } else if (!check) {
    //     return filtered.length;
    // }
    
}

console.log(countIdentical([[1], [2, 3], [4], [5]]));
