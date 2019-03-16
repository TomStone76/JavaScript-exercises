// Create a function that takes in array of hurdle heights and a jumper's jump height, 
// and determine whether or not the hurdler can clear all the hurdles. A hurdler can 
// clear a hurdle if their jump height is greater than or equal to the hurdle height.

function hurdleJump(hurdles, jumpHeight) {
    let flag = true;
    for (let i = 0; i < hurdles.length; i++) {
        if (hurdles[i] > jumpHeight) {flag = false};
    }
    return flag;
}