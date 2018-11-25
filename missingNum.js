Create a function that takes an array of numbers between 1 and 10 (excluding one number) 
and returns the missing number.

function missingNums(arr) {
    let sorted = arr.sort();
    let missing;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] - sorted[i-1] != 1) {
            missing = i;
        }
    }
    return missing;
}

// Test.assertEquals(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10)
