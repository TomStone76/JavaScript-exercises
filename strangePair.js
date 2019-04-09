// A pair of strings form a strange pair if the 
// first string's last letter equals the second string's 
// first letter and vice versa. Create a function that 
// returns true if a pair of strings constitutes a strange pair, 
// and false otherwise.

function isStrangePair(str1, str2) {
    return str1.charAt(str1.length-1) === str2.charAt(0);
}
