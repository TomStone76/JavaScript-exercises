// Create a function that takes two arrays and combines them 
// by alternatingly taking elements from each array in turn.

let x = ['a', 'b', 'c']
let y = [1, 2, 3, 4]

function mergeArrays(a, b) {
    let flag = true
    let newArr = []
    let combined = a.concat(b)
    if (flag === true) {
        for (let i = 0; i < a.length; i++) {
            newArr.push(a[i])
            flag = false
        }
    }
    if (flag === false) {
        for (let i = 0; i < b.length; i++) {
            newArr.push(b[i])
            flag = true
        }
    }
    return newArr
}

console.log(mergeArrays(x, y))