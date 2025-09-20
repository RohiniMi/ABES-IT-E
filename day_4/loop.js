//for(;;)
let row = 4;
for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= 2 * row - 1; j++) {
        if (i + j > row && j - i < row) {
            line += "*";
        } else {
            line += " ";
        }
    }
    //newline
    console.log(line);
}