// Create a function that determines whether a shopping order is eligible for free shipping.
// An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

function freeShipping(order) {
    const reducer = (a, b) => a + b;
    const vals = Object.keys(order).map(function(key) {
        return vals[key];
    })
    return vals;
}

const obj = {
    "Monopoly": 11.99,
    "Secret Hitler": 35.99,
    "Bananagrams": 13.99
}

console.log(freeShipping(obj));