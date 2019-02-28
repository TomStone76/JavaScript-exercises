// Create a function that takes a string of words and 
// return a string sorted alphabetically by the last character of each word.

let one = "herb camera dynamic";
let two = "stab traction artist approach";
let three = "sample partner autonomy swallow trend";

function sortByLast(str) {
    let arr = str.split(' '); // breaks string into array
    const arr2 = arr.map(function(item) {
        return item.split('').reverse().join('');
    })
    const arr3 = arr2.map(function(item) {
        return item.split('').reverse().join('');
    })
    return arr2.sort();
}

console.log(sortByLast(one));