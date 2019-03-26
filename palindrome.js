// Write a function that takes a string and determines whether it's a palindrome or not. 
// The function should return a boolean (true or false value).

let a = 'A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'
let b = 'Neuquen'
let c = 'Not a palindrome'

function isPalindrome(str) {
    let a = str.replace(/\W/g, '').toLowerCase();
    return a.split('').reverse().join('') === a;
}

console.log(isPalindrome(a));
console.log(isPalindrome(b));
console.log(isPalindrome(c));