const now = new Date();
console.log(now);
//Fri Jan 07 2022 19:06:43 GMT+0700 (Giờ Đông Dương)
// time zone:GPT+0700
//second: 43;
// minute:6;
//hour: 19;
// year: 2022;
//month:jan
//day for weak:fri
console.log(now.getTime());//print timestamp 1641609997373
//new date('timestamp')
console.log(new Date(1641609997373));//Sat Jan 08 2022 09:46:37 GMT+0700 (Giờ Đông Dương)
//new date("date string")
console.log(new Date('Sat Jan 08 2022 09:46:37 GMT+0700 (Giờ Đông Dương)'));//Sat Jan 08 2022 09:46:37 GMT+0700 (Giờ Đông Dương)
//new date(day month year hour minutes seconds miliseconds)
console.log(new Date(2022,0,8,9,57,23,23));
//các hàm get trong Date
const birthday = new Date(2000,1,21);
//in ra năm
console.log(birthday.getFullYear());//2000
console.log(birthday.getMonth());//1
console.log(birthday.getDate());//ngày của tháng 21
console.log(birthday.getDay());//in ra thứ mấy trong tuần in từ 0 đến 6
//in ra timestamp
console.log(birthday.getTime());//951066000000
//dateString
console.log(now.toDateString());//Sat Jan 08 2022
console.log(now.toLocaleDateString());//8/1/2022
//

const myTime = new Date(`Sat May 08 2022 09:46:37 GMT+0700 (Giờ Đông Dương)`);//8/1/2022
// console.log(`thoi gian mytime la: ${myTime}`)
const myYear = myTime.getFullYear();
const myDate = myTime.getDate();
const myMonth = myTime.getMonth()+1;
// kiểu function declaration;
// function preFix(a = ''){
//     if(myMonth < 10){
//         return '0';  
//     }
//     else{
//         return '';
//     }
// }

//function anonymous 
// let preFix = function(){
//     if(myMonth < 10){
//         return 0;
//     }
//     else{
//         return '';
//     }
// }
//ternary operater
const preFix = myMonth < 10 ? '0':'';
console.log(`ngay hom nay la ${myDate}/${preFix}${myMonth}/${myYear}`);

//timeout vs setinterval
//timeout
setTimeout(function (){
 console.log("call me aftef 3 seconds"); 
}, 3000)



clearInterval(
    setInterval(function(){
        console.log("callme");
    },1000)
)