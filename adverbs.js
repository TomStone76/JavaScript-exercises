// Create a function that counts the number of adverbs in a sentence. 
// An adverb is a word that ends with ly.

function countAdverbs(sentence) {
    const a = sentence.split(' ').map(x => x.replace(/\W/g, ''));
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i].substr(a[i].length - 2, a[i].length - 1) == 'ly') {c++;}
    }
    return a;
}

console.log(countAdverbs('The small, pup, gnawed a hole in the sock.'))