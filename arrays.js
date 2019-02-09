// Create a function that takes two arrays and combines them 
// by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
    let newArr = []
    let count

    if (a.length > b.length) {
        count = a.length
    } else {
        count = b.length
    }

    for (let i = 0; i < count; i++) {
        newArr.push(a[i])
        for (let j = 0; j < 1; j++) {
            newArr.push(b[i])
        }
    }

    const merged = newArr.filter(item => typeof item != 'undefined')

    return merged
}