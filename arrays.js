// Create a function that takes two arrays and combines them 
// by alternatingly taking elements from each array in turn.
function mergeArrays(a, b) {
    let newArr = [];
    let count;

    a.length > b.length ? count = a.length : count = b.length;

    for (let i = 0; i < count; i++) {
        if (typeof a[i] != 'undefined') newArr.push(a[i]);
        for (let j = 0; j < 1; j++) {
            if (typeof b[i] != 'undefined') newArr.push(b[i]);
        }
    }

    return newArr;
}