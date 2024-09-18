let money = +prompt('Số tiền vay:');
let months = +prompt('Số tháng cho vay:');
let monthlyRate = +prompt('Lãi suất hàng tháng:');
let interest = 0
let total = money;
for (let i = 1; i <= months; i++) {
    total = total * (monthlyRate + 1);
}
interest = total - money;
document.write(interest);