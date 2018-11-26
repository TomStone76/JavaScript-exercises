// Write a function that takes a string of one or more words as an argument 
// and returns the same string, but with all five or more letter words reversed.
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

function reverse(str) {
    let spl = str.split() //makes string into array
    let x // empty variable to hold word to be reversed
	for (let i = 0; i < spl.length; i++) { //initiates loop which will iterate through array
        if (i.length >= 5) {
            i.reverse()//
        }
    }
    return spl;
}