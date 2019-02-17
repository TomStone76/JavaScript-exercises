// Create a function that takes a string and returns a 
// new string with each new character accumulating by +1. 
// Separate each set with a dash.

let x = "abcs"

function accum(str) {
    let arr = str.split(''), newArr = []
    let count = 2;

    for (let i = 0; i < arr.length; i++) {
        arr[i].repeat(count);
        newArr.push(arr[i]);
        count += 1
    }

    return newArr;
}

console.log(accum(x))