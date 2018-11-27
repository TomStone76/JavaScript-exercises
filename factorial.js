// Create a function that takes an integer and returns the factorial of that integer. 
// That is, the integer multiplied by all positive lower integers.

function factorial(int) {
	if (int < 0) {
        return -1;
    } else if (int == 0) {
        return 1;
    } else {
        return (int * factorial(int - 1));
    }
}

console.log(factorial(5));