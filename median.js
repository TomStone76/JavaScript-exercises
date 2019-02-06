// Create a function that takes an array of numbers and return its median.
function median(arr) {
    let s = arr.sort(function(a, b){return a - b})
    if (s.length % 2 !== 0) {
        return (s.length + 1) / 2
    } else if (s.length % 2 === 0) {
        for (let i = 0; i < s.length; i++) {
            let first = s[s.length / 2]
            let second = s[(s.length / 2) - 1]
            return (first + second) / 2
        } 
    }
}

let x = [20, 40, 20, 30, 50, 60, 70, 0, 20]

console.log(median(x))