// Create a function that outputs the results of a flashcard. 
// A flashcard is an array of three elements: a number, an operator symbol, and another number. 
// Return the mathematical result of that expression.

function flash([num, op, num2]) {
    if (op === 'x') return num * num2;
    if (op === '+') return num + num2;
    if (op === '-') return num - num2;
    if (op === '/') {
        return num2 == 0 ? undefined : parseFloat((num / num2).toFixed(2));
    }
}

let a = [3, 'x', 7];
let b = [5, '+', 7];
let c = [10, '-', 9];
let d = [10, '/', 3];

console.log(flash(d));