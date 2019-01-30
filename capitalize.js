// Create a function that takes a string as an argument and 
// converts the first character of each word to uppercase. 
// Return the newly formatted string.

const x = "The small pup gnawed a hole in the sock."

function makeTitle(str) {
    var arr = str.split(' ')
    const capital = arr.map(x => x[0].toUpperCase() + x.substring(1))
    const joined = capital.join(' ')
    return joined
}

console.log(makeTitle(x))