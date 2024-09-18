let n = +prompt('Tính giai thừa của:')
while (n < 0) {
    n = +prompt('Số nhập phải lớn hơn 0:')
}
let factorial = 1;
for (let i = 1; i <= n; i++) {
    if (n == 0) {
        factorial = 1;
        break;
    } else {
        factorial *= i;
    }
}
document.write(factorial);