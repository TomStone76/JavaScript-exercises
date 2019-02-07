// Create a function that returns the data type of a given variable. 
// These are the eight data types this challenge will be testing for:
// Array
// Object typeof
// String (typeof)
// Number (typeof)
// Boolean (typeof)
// Null (typeof)
// Undefined (typeof)
// Date

function dataType(value) {
    if (!(value instanceof Date) && !Array.isArray(value)) {
        return typeof value
    } else if ((value instanceof Date) || (Array.isArray(value))) {
        if (value instanceof Date) {
            return 'date'
        } else if (Array.isArray(value)) {
            return 'array'
        }
    }
}

// console.log(dataType([1, 2, 3, 4, 5])) //CORRECT
// console.log(dataType({key: "value"})) //CORRECT
// console.log(dataType("This is an example string...")) //CORRECT
// console.log(dataType(2017)) // CORRECT
// console.log(dataType(true)) // CORRECT
// console.log(dataType(null))
// console.log(dataType(undefined))
// console.log(dataType(new Date()))

console.log(typeof null)