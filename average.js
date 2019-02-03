let x = [90, 87, 68, 55, 99, 85, 87, 82, 50, 97]

function average(arr) {
    const reducer = (accumulator, currentVal) => accumulator + currentVal
    let result = arr.reduce(reducer) / arr.length
    return result
}

console.log(average(x))