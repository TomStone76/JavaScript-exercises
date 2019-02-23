function average(arr) {
    const reducer = (accumulator, currentVal) => accumulator + currentVal
    let result = arr.reduce(reducer) / arr.length
    return result
}