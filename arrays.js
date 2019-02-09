// Create a function that takes two arrays and combines them 
// by alternatingly taking elements from each array in turn.

let x = ['a', 'b', 'c', 'd']
let y = [1, 2, 3, 4, 5, 6]

function mergeArrays(a, b) {
    let flag = true
    let newArr = []
    let combined = a.concat(b)

    for (let i = 0; i < a.length; i++) {
        newArr.push(a[i])
        for (let j = 0; j < 1; j++) {
            newArr.push(b[i])
        }
    }
    return newArr
}

console.log(mergeArrays(x, y))

