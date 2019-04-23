// Create a function that takes two numbers as arguments 
// and return the percent difference between them.

function percentDiff(num1, num2) {
    return parseFloat(Math.abs(((num1-num2)/((num1+num2)/2)*100).toFixed(1)));
}