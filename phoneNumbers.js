// Create a function that takes an array of 10 numbers (between 0 and 9) 
// and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(numbers) {
    let str = numbers.join('')
    let formatted = "(" + str.substring(0, 3) + ") " +
    str.substring(3, 6) + "-" + str.substring(6, 10)
    return formatted
}