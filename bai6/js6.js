let row = 7;
for (let i = 1; i < row; i++) {
    for (let j = 1; j <= row; j++) {
        if ((i === 1 && (j === row - 5 || j === row - 4 || j === row - 1 || j === row - 2))
            || (i === 2)
            || (i === 3)
            || (i === 4 && (j >= row - 5 & j <= row - 1))
            || (i === 5 && j >= row - 4 & j <= row - 2)
            || (i === 6 && j === row - 3)) {
            document.write('*');
        } else {
            document.write('&nbsp;');
        }
    }
    document.write('<br>');
}
