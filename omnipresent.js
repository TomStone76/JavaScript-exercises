function isOmnipresent (arr, val) {
    let flag;
    for (let i = 0; i < arr.length; i++) {
        !arr[i].includes(val) ? flag = false : flag = true;
    }
    return flag;
}