// Create a function that takes a single string as argument and 
// returns an ordered list containing the indexes of all capital letters in the string.

var x = 'eDaBiT'

function indexOfCaps(str) {
    let arr = str.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i].toUpperCase() && arr[i].toUpperCase() != arr[i].toLowerCase()) {
            newArr.push(arr.indexOf(arr[i]))
        }
    }
    return newArr
}

console.log(indexOfCaps(x))