// A group of friends have decided to start a secret society. 
// The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and return's the name of the secret society.

function societyName(friends) {
    const f = friends.map(n => n[0]);
    return f.sort().join('').toUpperCase();
}

console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]))