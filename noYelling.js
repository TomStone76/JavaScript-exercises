// Create a function that transforms sentences ending with multiple question marks ? 
// or exclamation marks ! into a sentence only ending with one.

function noYelling(phrase) {
    let arr = phrase.split(' ')
    let start = arr.slice(0, -1), end = phrase.split(' ').pop();
    let clean = end.replace(/\W/g, '');
    let result = start.join(' ') + ` ${clean}`
  
    if (!(phrase.endsWith('?') || phrase.endsWith('!'))) {
		return phrase;		
	} else if ((phrase.endsWith('?') || phrase.endsWith('!'))) {
		if (phrase.endsWith('?')) {
			return result.trim() + '?'
		} else if (phrase.endsWith('!')) {
            return result.trim() + '!'
        }
    }   
}

console.log(noYelling('Oh my fucking god???'));