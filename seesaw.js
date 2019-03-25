// A number is left-heavy if the digits on the left side are larger than the digits on the right. 
// It is right-heavy if the digits on the right side are larger than the digits on the left. 
// Else, it is balanced.

// Write a function that takes in an integer and classifies it into one of the three 
// mutually exclusive categories: left, right or balanced. For inputs with an odd number 
// of integers, ignore the fulcrum (the middle number).

function seesaw(num) {
    let l = String(num).substring(0, len / 2);
    let r = String(num).substring(len / 2, len);
    let o = r.substr(1, len);
    
    if (num === null || num === undefined) {
        return 'balanced';
    } else if (!(num === null || num === undefined)) {
        if (String(num).length % 2 !== 0) {
            if (l == o) {return 'balanced';}
            if (l > o) {return 'left';}
            if (l < o) {return 'right';}
        } else if (String(num).length % 2 === 0) {
            if (l == r) {return 'balanced';}
            if (l > r) {return 'left';}
            if (l < r) {return 'right';}
        }
    }
}