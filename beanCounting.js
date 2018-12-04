// Write a function countBs that takes a string as its only argument and 
// returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, 
// except it takes a second argument that indicates the character that is to be counted 
// (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function countBs(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            counter++;
        }
    }
    return counter;
}

function countChar(str, charName) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charName) {
            counter++
        }
    }
    return counter;
}

function countBs(str) {
    return countChar(str, "B");
} 