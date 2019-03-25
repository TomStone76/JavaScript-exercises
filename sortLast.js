// Create a function that takes a string of words and 
// return a string sorted alphabetically by the last character of each word.

function sortByLast(str) {
    let arr = str.split(' ');
    const map1 = arr.map(word => word.split('').reverse().join(''));
    return map1.sort().map(word => word.split('').reverse().join(''));
}

console.log(sortByLast('sample partner autonomy swallow trend'))