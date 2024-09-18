let width = 20;  // Width of the rectangle
let height = 7;  // Height of the rectangle

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        // Print '*' for the first and last row, or first and last column
        if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
            document.write('*');
        } else {
            document.write('&nbsp;'); // Non-breaking space for inner area
        }
    }
    document.write('<br>'); // Line break at the end of each row
}