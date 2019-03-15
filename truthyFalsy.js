// In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context.
//  All values are truthy unless they're defined as falsy.

// All falsy values are as follows:

// false
// null
// undefined
// 0
// NaN
// ""
// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

function isTruthy(input) {
    return input ? 1 : 0;
}