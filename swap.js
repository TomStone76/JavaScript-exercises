// Write a function that takes a two-digit number and 
// determines if it's the largest of two possible digit swaps.

function largestSwap(num) {
    let a=num.toString(), b=a[1]+a[0];
    return a >= b;
}