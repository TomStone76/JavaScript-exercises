// Create a function that takes an array of positive and negative numbers. 
// Return an array where the first element is the count of positive numbers 
// and the second element is the sum of negative numbers.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPosSumNeg(arr) {

    if (typeof arr === 'object' || arr === []) {
        return [];
    } else {
        let positive = [], negative = []; // hold neg and pos nums from input

        for (let i = 0; i < arr.length; i++) { // loops through input; pushes to above arrays
            if (arr[i] > 0) positive.push(arr[i]);
            else if (arr[i] < 0) negative.push(arr[i]);
        }

        let positiveLength = [];
        let negSumArray = [];

        positiveLength.push(positive.length);

        const reduceNegative = (accumulator, currentVal) => accumulator + currentVal;
        let negativeSum = negative.reduce(reduceNegative);
        negSumArray.push(negativeSum);
    
        return positiveLength.concat(negSumArray);
    } 
}

console.log(countPosSumNeg(null))