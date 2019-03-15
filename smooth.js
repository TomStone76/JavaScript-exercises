// Carlos is a huge fan of something he calls smooth sentences. 
// A smooth sentence is one where the last letter of each word is identical to the first letter the following word.

// For example, the following would be a smooth sentence:

// "Carlos swam masterfully."

// Since "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

function isSmooth(sentence) {
    let flag = true;
    // return sentence.split(' ')[0];
    let arr = sentence.split(' ');
    for (let i = 0; i < [...arr].length; i++) {
        if (arr[i].split('').pop() != arr[i+1].split('').shift()) {
            flag = false;
        }
        
    }
    
}

console.log(isSmooth("Carlos swam masterfully."));