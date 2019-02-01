// Create a function that takes a string and returns the middle character(s). 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle two characters.

function getMiddle(str) {
    let len = str.length
    if (len % 2 === 0) {
        let x = str.substring(0, len/2)
        let y = str.substring(len/2, len)
        return x.slice(-1) + y.charAt(0)
    } else if (len % 2 !== 0) {
        let x = str.substring(0, (len/2) + 1)
        return x.split('').pop()
    }
}
