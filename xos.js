function XO(str) {
    var mod = str.toLowerCase(), x = [], o = [];
    for (let i = 0; i < mod.length; i++) {
        if (mod[i] == 'x') x.push(mod[i]);
        if (mod[i] == 'o') y.push(mod[i]);
    }
    return x.length == o.length;
}