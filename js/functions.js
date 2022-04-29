// funtion (hàm)
// khai báo báo function
// your code here
// cú pháp (syntax): function funtionName(parameters){}
// đề bài viết hàm tính tổng 2 số tự nhiên

// function sum(a,b){
//     // console.log(`is it working`);
//     //return
//     //không có return thì kết quả của hàm là undefined
//     // return a + b;
//     const total = a+b;
//     return total;
// }
// // sum(); (invoke function);
// console.log(sum(10,5));

// //arguments đối số;
// //lưu function vào một biến rồi gọi sau;
// function add(a = 0,b=0){
//     console.log(a+b);
//     return a + b;
// }

// //cách gọi function add();
// const sum2 = add;// gán function cho biến sum2 nhưng chưa đc gọi
// sum2(300,500);
// //tham số là function
// //tính trung bình của a và b -> (a+b)/2
// function averager(a,b,fn){
//     const total = fn(a,b);
//     return total / 2;
// }

// let result = averager(200,300,sum2);
// console.log(`ket qua result: ${result}`);


// //function declaration
// //anonymous function(function expression)
// const logName = function(){
//     console.log('anonymous function');
// }
// logName();
// //IIfe -> immediately invoke funtion(hàm tự động chạy)
// (function(){
//     console.log('immediately invoke funtion')
// })();

// //scope
// // global scope
// let myname = 'Dieu'// global scope
// function logYourName(){
//     let myname2 = 'duc';//function scope
//     console.log(myname2);
// }
// console.log(myname);
// logYourName();

// const message2 = 'hello dieu'; ;
// if(2 > 1){
//     let message2 //block scope
// }
// alert(message2);
//closure

function sayHello2(){
    let  message4 = 'hi';
        function sayHi(){
            console.log(message4);
        }
        return sayHi;
}

let hello = sayHello2();
hello();

function sayHello3(message){
    return function hiYourName(name){
        console.log(`${message} ${name}`);
    };
}
let hello2 = sayHello3(`tôi tên là đức`);
hello2(`developer`);