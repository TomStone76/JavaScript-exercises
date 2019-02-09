let num = Math.floor(Math.random() * 10)

let param = process.argv[2]

function compare(x) {
    let y = (x === num)
    return y ? "correct guess!" : "incorrect guess!"
}

console.log(compare(param))
