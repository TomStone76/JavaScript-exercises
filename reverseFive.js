// Write a function that takes a string of one or more words as an argument 
// and returns the same string, but with all five or more letter words reversed.
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.


var x = 'Yoshi is a cute dog.'

function reverse(str) {
    var arr = str.split(' ')
    const newArr = arr.map(word => {
        word.toUpperCase()
    })
    return newArr

}

console.log(reverse(x))