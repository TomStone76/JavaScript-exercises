// Create a function that counts the number of times 
// a particular letter shows up in the word search.

function letterCounter(arr, letter) {
    let count = 0, str = arr.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) count++
    }
    return count;
}

console.log(letterCounter([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
  ], "D"))