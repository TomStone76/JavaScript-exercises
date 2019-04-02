// For this task, you will be given a completed 3x3 square, 
// in the form of a two-dimensional array. 
// Create a function that checks to make sure this 3x3 square 
// contains each number from 1-9 exactly once. Make sure there 
// are no duplicates, and no numbers outside this range.

function isMiniSudoku(square) {
    let key = '1, 2, 3, 4, 5, 6, 7, 8, 9';
    let formatted = square[0].concat(square[1], square[2]).sort()
    return key === formatted.toString();
}

console.log(isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]]));
