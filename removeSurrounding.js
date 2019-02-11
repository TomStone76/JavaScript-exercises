// Create a function that takes a sequence of either strings or numbers, 
// removes the surrounding duplicates and returns an array of items without 
// any items with the same value next to each other and preserves the original order of items.


let nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 2, 2];
let strings = ['a', 'b', 'b', 'c', 'c', 'c', 'd', 'd', 'd', 'd'];

function uniqueInOrder(sequence) {
    let newArr = [];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] != sequence[i + 1]) {
            newArr.push(sequence[i]);
        }
    }
    return newArr;
}

console.log(uniqueInOrder(nums))