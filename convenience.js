// Given a total due and an array representing the amount of change in your pocket, 
// determine whether or not you are able to pay for the item. Change will always be 
// represented in the following order: quarters, dimes, nickels, pennies.

function changeEnough(change, amountDue) {
    let q = change[0] / 4;
    let d = change[1] / 10;
    let n = change[2] / 20;
    let p = change[3] / 100;
    return q + d + n + p >= amountDue;
}