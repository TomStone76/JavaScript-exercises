// Create a function that accepts an array of two strings and checks if 
// the letters in the second string are present in the first string.

function letterCheck(arr) {
    let first = arr.shift().toLowerCase().split('');
    let second = arr.pop().toLowerCase().split('');
    let flag = true;
    for (let i = 0; i < second.length; i++) {
        if (!first.includes(second[i])) {
            flag = false;
        }
    }
    return flag;
}

console.log(letterCheck(["trances", "nectar"]))
console.log(letterCheck(["THE EYES", "they see"]))
console.log(letterCheck(["assert", "staring"]))
console.log(letterCheck(["arches", "later"]))
console.log(letterCheck(["dale", "caller"]))
console.log(letterCheck(["parses", "parsecs"]))
console.log(letterCheck(["replays", "adam"]))
console.log(letterCheck(["mastering", "streaming"]))
console.log(letterCheck(["drapes", "compadres"]))
console.log(letterCheck(["deltas", "slated"]))