// Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(str) {
    let hash = 0, plus = 0, arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') hash++;
        if (str[i] === '+') plus++; 
    }
    arr.push(hash); arr.push(plus);
    return arr;    
}
