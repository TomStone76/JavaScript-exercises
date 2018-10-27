// Create a function that accepts a string of space separated numbers 
// and returns the highest and lowest number (as a string).

//"1 2 3"

function highLow(str) {
    let arr =  str.split(" "), secondArr = [];
    let max = Math.max(...arr), min = Math.min(...arr);
    secondArr.push(max, min)
    return secondArr.join(" ")
}

console.log(highLow("33 346 7511 1 7 7547"));