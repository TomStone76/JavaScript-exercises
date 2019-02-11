// Create a function that takes an array of positive and negative numbers. 
// Return an array where the first element is the count of positive numbers 
// and the second element is the sum of negative numbers.

let nums = [1, 2, 3, -1, -2, -3];

function countPosSumNeg(arr) {
    let positive = [], negative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) positive.push(arr[i]);
        else if (arr[i] > 0) negative.push(arr[i]);
    }

    let positiveCount = 

    const reduceNegative = (accumulator, currentVal) => accumulator + currentVal;
    let negativeSum = negative.reduce(reduceNegative);

}