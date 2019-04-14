function average(arr) {
    const reducer = (x, y) => x + y
    let result = arr.reduce(reducer) / arr.length
    return result
}