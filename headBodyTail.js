// Write a function that takes four string arguments. 
// You will be comparing the first string to the three next strings. 
// Verify if the first string starts with the second string, 
// includes the third string, and ends with the fourth string. 
// If the first string passes all checks, return the string 
// "My head, body, and tail.", otherwise, return "Incomplete.".

function verifySubstrs(mainStr, head, body, tail) {
    var testOne, testTwo, testThree
    if (mainStr.startsWith(head)) {
        testOne = true;
    } else {
        testOne = false;
    }
    if (mainStr.includes(body)) {
        testTwo = true;
    } else {
        testTwo = false;
    }
    if (mainStr.endsWith(tail)) {
        testThree = true;
    } else {
        testThree = false;
    }
    if (testOne && testTwo && testThree) {
        return "My head, body, and tail."
    } else {
        return "Incomplete.";
    }
}