// Create a function that accepts a string of space separated numbers 
// and returns the highest and lowest number (as a string).

//"1 2 3"

function highLow(str) {
    let arr =  str.split(" "), firstArr = [], secondArr = [];
    for (let i = 0; i < arr.length; i++) {
        let x = parseInt(arr[i])
        firstArr.push(x);
    }
    let max = Math.max(...firstArr), min = Math.min(...firstArr);
    secondArr.push(max, min)
    return secondArr.join(" ")
}

