// Create a function that takes an array of numbers and return its median.

function median(arr) {
    let sorted = arr.sort()
    if (arr.length / 2 === 0) {
        return (arr.length + 1) / 2
    } else {
        let first = arr.slice(0, arr.length/2)
        return first
    }
}

console.log(median([2, 5, 6, 5, 6, 3, 4]))