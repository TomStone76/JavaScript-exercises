// Create a function that takes an array of positive and negative numbers. 
// Return an array where the first element is the count of positive numbers 
// and the second element is the sum of negative numbers.

function countPosSumNeg(arr) {
    if (arr === null || arr.length === 0) {
        return [];
    } else {
        let positive = [], negative = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) positive.push(arr[i]);
            else if (arr[i] < 0) negative.push(arr[i]);
        }

        let positiveLength = [], negSumArray = [];

        positiveLength.push(positive.length);

        const reduceNegative = (accumulator, currentVal) => accumulator + currentVal;
        let negativeSum = negative.reduce(reduceNegative);
        negSumArray.push(negativeSum);
    
        return positiveLength.concat(negSumArray);
    } 
}