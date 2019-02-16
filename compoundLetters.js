// Create a function that takes a string and returns a 
// new string with each new character accumulating by +1. 
// Separate each set with a dash.

let x = "abcs"

function accum(str) {
    let arr = str.split('')

    for (let i = 0; i < arr.length; i++) {
        let y = arr[i].repeat(2)
        return y
    }
}

console.log(accum(x))