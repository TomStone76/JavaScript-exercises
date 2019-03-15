// Carlos is a huge fan of something he calls smooth sentences. 
// A smooth sentence is one where the last letter of each word is identical to the first letter the following word.

// For example, the following would be a smooth sentence:

// "Carlos swam masterfully."

// Since "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

function isSmooth(sentence) {
    let flag = true;
    let arr = sentence.split(' ');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split(''));
    }

    for (let j = 0; j < newArr.length; j++) {
        // if (newArr[j].pop() != newArr[j+1].shift()) {
        //     flag = false;
        // }
        console.log(newArr[j+1][0].toLowerCase())
    
    }
     
    // return sentence.split(' ')[0];

    // for (let i = 0; ; i++) {
    //     let x = arr[i].split('').pop(), y = arr[i+1].split('').shift()
    //     if (x != y) {
    //         flag = false;
    //     }
    // }
    return flag
}

console.log(isSmooth("Carlos swam masterfully."));