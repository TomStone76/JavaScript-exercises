// Create a function that takes an array of numbers and return its median.

function median(arr) {
    let sorted = arr.sort()
    if (arr.length / 2 === 0) {
        return (arr.length + 1) / 2
    } else {
        for (let i = 0; i < arr.length; i++) {
            let first = arr.slice(0, arr.length/2)
        }
    }
}

console.log(median([2, 5, 6, 6, 3, 4]))