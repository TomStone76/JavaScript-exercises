// Write a function that takes two strings and returns 
// (true or false) whether they're anagrams or not.

function isAnagram(s1, s2) {
    let mod1 = s1.toLowerCase().split('').sort().join('');
    let mod2 = s2.toLowerCase().split('').sort().join('');

    return mod1 === mod2;
}