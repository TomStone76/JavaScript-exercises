// Create a function that returns true if a number is prime and false if it's not. 
// A prime number is any positive integer that is evenly divisible by only two divisors:
// 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

function isPrime(num) {
    var start = 2;
    while (start <= Math.sqrt(num)) {
        if (num % start ++ < 1) {
            return false
        }
    }
    return num > 1;