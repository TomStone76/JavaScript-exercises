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