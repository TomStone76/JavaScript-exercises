// Create a function that takes an array of card numbers
//  and checks if the sum of their value exceeds 21. 
//  If the sum exceeds 21, return true and if the sum is 
//  under or equal to 21, return false.

function overTwentyOne(cards) {
    let arr = [];
    for (let i = 0; i < cards.length; i++) {
        if (typeof cards[i] === 'number') arr.push(cards[i]);
        if (typeof cards[i] === 'string') {
            if (cards[i] === 'J' || cards[i] === 'K' || cards[i] === 'Q') {
                arr.push(10);
            } else if (cards[i] === 'A') {
                if (sum + cards[i] === 21) {
                    arr.push(1);
                } else if (sum + cards[i] !== 21) {
                    arr.push(11);
                }
            }
        }
    }
    const reducer = (a, b) => a + b;
    let sum = arr.reduce(reducer);
    return sum === 21;
}