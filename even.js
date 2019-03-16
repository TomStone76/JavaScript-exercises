// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
    let arr = [];
    for (let i=2; i <= num; i+=2) {
        arr.push(i);
    }
    return arr;
}

console.log(findEvenNums(9))