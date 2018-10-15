
// for (i = 0; i < 4; i++) {
//     console.log(" # # # #");
//     console.log("# # # #");
// }

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);