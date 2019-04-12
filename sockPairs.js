// Joseph is in the middle of packing for a vacation. 
// He's having a bit of trouble finding all of his socks, though.

// Write a function that returns the number of sock pairs he has. 
// A sock pair consists of two of the same letter, such as "AA". 
// The socks are represented as an unordered sequence.

function sockPairs(socks) {
    if (socks === '') {
        return 0;
    } else if (socks !== '') {
        let count = 0;
        let sorted = socks.split('').sort();

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] === sorted[i + 1]) count++;
        }
        // return count - 1;
        return count;
    }
}

console.log(sockPairs("ABABAB"));