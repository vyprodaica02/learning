const number1 = "6";
const number2 = "4.5";

console.log(parseInt(number1));  // in ra mảng có số nguyên
console.log(parseFloat(number2)); // in ra mảng có số thực
const number3 = -10;
console.log(Math.abs(number3)) // asb là giá trị tuyện đối Math.abs là hàm in ra giá trị tuyệt đối
const number4 = 4.2;
console.log(`giá trị number4 là: ${Math.floor(number4)}`); // làm tròn giá trị thấp nhất
console.log(`gia tri lam tron number4 là: ${Math.ceil(number4)}`);// lam tron gia tri lon nhat
console.log(`gia trị làm tròn gần nhất của number4 là: ${Math.round(number4)}`); // làm tròn gần nhất
// toFixed(2) làm tròn 2 chữ số và chở thành một string
console.log(`gia tri in ra la: ${parseFloat((1/3).toFixed(2))}`);
// Math.random là hàm random 1 số ngẫu nhiên từ 0 đến 9
console.log(`gia tri random là: ${Math.ceil(Math.random()*10)}`);

console.log(isNaN(`this is a string`));
console.log(isNaN(`1234`));
console.log(`giá trị của number.isnan là: ${Number.isNaN(undefined)}`);

