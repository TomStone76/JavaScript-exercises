// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, 
// and the array of correctly-typed words and outputs an array containing 1s 
// (correctly-typed words) and -1s (incorrectly-typed words).

function correctStream(user, correct) {
    let score = [];
    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < correct.length; j++) {
            user[i] === correct[j] ? score.push(1) : score.push(-1)
        }
    }
    return score;
}

let x = ["cat", "blue", "skt", "umbrells", "paddy"];
let y = ["cat", "blue", "sky", "umbrella", "paddy"];

console.log(correctStream(x, y));