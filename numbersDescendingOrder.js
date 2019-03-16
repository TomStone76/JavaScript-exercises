// Create a function that takes any nonnegative number as an argument 
// and return it with it's digits in descending order. 
// Descending order is when you sort from highest to lowest.

function sortDecending(num) {
    var a = num.toString();
    var b = a.split("");
    var c = b.sort().reverse();
    return parseInt(c.join(""));
}