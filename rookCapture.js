// A chessboard has rows numbered 1-8 and columns numbered A-H. 
// In chess, rooks are pieces that can any number of squares horizontally or vertically.

// Given the location of your rook and your opponent's rook, determine whether or not 
// you can capture your opponent's rook with your own. For this exercise, assume there 
// are no other pieces that are blocking. Your position and your opponent's position are 
// represented as the first and second element of the input array, respectively.

// For instance, in this example: canCapture(["A8", "E8"]) ➞ true your rook (at A8) 
// can take your opponents rook (at E8) by moving horizontally.

function canCapture([yourRook, opponentsRook]) {
    let y = [], o = [];
    y.push(yourRook); o.push(opponentsRook);
    let c = y + o;
    return c[0] === c[2] || c[1] === c[3];
}