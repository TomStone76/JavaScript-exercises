// Create a function that takes a string and returns the number (count) of vowels contained within it.


function countVowels(str) {
    let arr = str.split(''), vowels = []
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === 'a' || arr[x] === 'e' || arr[x] === 'i' || arr[x] === 'o' || arr[x] === 'u' ) {
            vowels.push(arr[x])
        }
    }
    return vowels.length
} 