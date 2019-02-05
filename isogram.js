// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending on 
// whether or not it's an "isogram".

function isIsogram(str) {
    let lower = str.toLowerCase()
    let arr = lower.split('')
    let formatted = [...new Set(arr)].join('')
    
    if (lower === formatted) {
        return true // if the original is equal to the isogram-formatted one, it's an isogram.
    } else {
        return false // if the original and the isogram-formatted one are different, it's not an isogram
    }
}

console.log(isIsogram('subdermatoglyphic'))