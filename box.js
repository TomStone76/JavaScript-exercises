// Create a function that returns true if an asterisk * is inside a box.

function inBox(arr) {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('*')) flag = true;
    }
    return flag;
}