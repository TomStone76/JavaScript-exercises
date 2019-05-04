// Given a number and an object with min and max properties, 
// return true if the number lies within the given range (inclusive).

function isInRange(num, range) {
    return num>=range.min && num<=range.max;
}