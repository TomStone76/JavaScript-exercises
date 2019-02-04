// Create a function that takes a string, checks if it has the same number of 'x's and 'o's
// and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

function XO(str) {
    let format = str.toLowerCase()
	let x = format.match(/x/gi), o = format.match(/o/gi);
    let arr = format.split('')
    
	if (arr.includes('x') && arr.includes('o')) {
		if (x.length === o.length) {
            return true
        } else {
            return false
        }
    } else if (arr.includes('x') && !arr.includes('o')) {
        return false
    } else if (!arr.includes('x') && arr.includes('o')) {
        return false
    } else if (!arr.includes('x') && !arr.includes('o')) {
        return true
    }
}