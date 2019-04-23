function completelyFilled(arr) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(' ')) flag = false;
    }
    return flag;
}


// function completelyFilled(arr) {
//     return arr.join('').includes(' ');
// }
