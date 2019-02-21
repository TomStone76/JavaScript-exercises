// Create a function that takes a string as an argument and 
// returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(str) {
   return str
   .replace(/e/g, '3')
   .replace(/i/g, '1')
   .replace(/a/g, '4')
   .replace(/o/g, '0')
   .replace(/s/g, '5')
}

console.log(hackerSpeak('aeios'))

//NOT my own solution. From https://edabit.com/challenge/cada8J3AWGRhwQhkk