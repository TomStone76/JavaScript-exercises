// Create a function that, given a string with at least three characters, returns an array of its:

// 1. Length.
// 2. First character.
// 3. Last character.
// 4. Middle character, if the string has an odd number of characters. 
// Middle TWO characters, if the string has an even number of characters.
// 5. Index of the second occurrence of the second character in the format "@ index #" 
// and "not found" if the second character doesn't occur again.

function allAboutStrings(str) {
    let arr = [];
    let len = str.length;
    let firstChar = str.charAt(0);
    arr
        .push(...len)
        .push(...firstChar)
    return arr
}

console.log(allAboutStrings("Computer"))