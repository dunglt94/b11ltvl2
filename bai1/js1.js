let n = +prompt('Hiển thị n số trong dãy fibonacci:')
let a = 0;
let b = 1;
let c;
let i = 0;
while (i < n) {
    c = a + b;
    a = b;
    b = c;
    document.write(`${c} <br>`)
    i++;
}