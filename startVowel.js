function retrieve(str) {
    let formatted = str.substr(0, str.length-1).split(' ');
    let arr = [];
    for (let i = 0; i < formatted.length; i++) {
        if (formatted[i][0] === formatted.match(/[aeiou]/)) arr.push(formatted[i]);
    }

    return arr
}
console.log(retrieve("A simple life is a happy life for me."))