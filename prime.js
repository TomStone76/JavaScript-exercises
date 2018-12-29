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
    return num > 1


console.log(isPrime(1)); //false
console.log(isPrime(2)); //true
console.log(isPrime(3)); //true
console.log(isPrime(4)); //false
console.log(isPrime(5)); //true
console.log(isPrime(6)); //false
console.log(isPrime(7)); //true
console.log(isPrime(8)); //false
console.log(isPrime(9)); //false
console.log(isPrime(10)); 