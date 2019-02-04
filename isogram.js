// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending on 
// whether or not it's an "isogram".

function isIsogram(str) {
    let lower = str.toLowerCase()
    let arr = lower.split('')
    let formatted = [...new Set(arr)].join('')
    
    if (lower === formatted) {
        return true
    } else {
        return false
    }
}