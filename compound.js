// Create a function that takes a string and 
// returns a new string with each new character accumulating by +1. 
// Separate each set with a dash.

function accum(str) {
	for (let i = 0; i < str.length; i++) {
       return str[i].repeat([i])
    }
}

console.log(accum('abcd'))