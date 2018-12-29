// Create a function that takes a string, checks if it has the same number of 'x's and 'o's
// and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

function XO(str) {
    let z = str;
    let x, y;

    if (z != "") {
        for (let i = 0; i < z.length; i++) {
            x = str.match(/x/gi).length;
            y = str.match(/o/gi).length;
        }

        if (x === y) {
            return true;
        } else if (x != y) {
            return false
        }
    }
    
    if (z === "") {
        return true;
    }
}

console.log(XO("abcdefghijklmnopqrstuvwxyz"));