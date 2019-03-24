// Create a function that takes in an initial word and filters out an array to 
// contain words that start with the same letters as the initial word.

function dictionary(initial, words) {
    const res = words.filter(word => word.startsWith(initial));
    return res;
}

console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));