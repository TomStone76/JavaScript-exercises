// Create a function that alternates the case of the characters in a string.

let test = "The quick brown fox jumped over the lazy dog."

function alternatingCaps(str) {
    let arr = str.split('')
    const mapped = arr.map(function(item) {
        if (arr.indexOf(item) % 2 == 0) {
            return item.toUpperCase()
        } else if (arr.indexOf(item) % 2 != 0) {
            return item.toLowerCase()
        }
    })
    return mapped.join('')
}

console.log(alternatingCaps(test))