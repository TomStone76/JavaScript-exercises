// Create a function that takes an object and 
// returns the keys and values as separate arrays.

var obj = ({a: 1, b: 2, c: 3});

function keysAndValues(obj) {
    let keys = [], vals = [];
    keys.push(Object.keys(obj));
    vals.push(Object.values(obj));
    return '[[' + keys + '], [' + vals + ']]';
}

console.log(keysAndValues(obj))