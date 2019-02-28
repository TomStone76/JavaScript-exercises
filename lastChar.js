// Create a function that takes a string of words and 
// return a string sorted alphabetically by the last character of each word.

let one = "herb camera dynamic";
let two = "stab traction artist approach";
let three = "sample partner autonomy swallow trend";

function sortByLast(str) {
    let arr = str.split(' '); 
    const arr2 = arr.map(x => x.split('').reverse().join(''));
    let reversed = arr2.sort();
    const arr3 = reversed.map(x => x.split('').reverse().join(''));
    return arr3.join(' ');
}

console.log(sortByLast(one));