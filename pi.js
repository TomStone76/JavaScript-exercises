// Given a number n, write a function that returns PI to n decimal places.

function myPi(n) {
    var x = parseFloat(Math.PI.toFixed(n));
    return x;
}

console.log(myPi(15));

// logs 3.141592653589793