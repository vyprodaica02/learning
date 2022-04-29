//loop 
const number = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 0; i< number.length ; i++){
//     console.log(`the index is ${i}`);//1,2,3,4,5
// }
// for(let i = 0; i< number.length ; i++){
//     console.log(`the number is ${number[i]}`);//1,2,3,4,5
// }
// for(let i = 0; i< number.length ; i++){
//     console.log(`the number is ${number[i]}`);//1,2,3,4,5
//     if(number[i] === 8){
//         continue
//     }
// }
// for(let i = 0; i< number.length ; i++){
//     if(number[i] === 8){
//         break
//     }
//     console.log(`the number is ${number[i]}`);//1,2,3,4,5
// }
// for(let i = number.length; i >= 0 ; i--){
//     console.log(`the number is ${number[i]}`);//1,2,3,4,5
// }
//vòng lặp lồng nhau(nested loop)
// for(let i = number.length-1; i >= 0 ; i--){
//     console.log(`the number is ${number[i]}`);
//     for(let j = number.length-1; j >= 0 ; j--){
//         console.log(j)
//     }
// }
//bài tập 1:sao chép 1 mảng không sủ dụng slice mà sử dụng loop
// let copyArr = [];
// for(let i = 0 ; i <number.length ; i++){
//     copyArr.push(number[i]);
// // }
// console.log(copyArr);

// let str = 'i love';
// let result = '';
// for(i = str.length - 1 ; i >= 0  ; i--){
    //     console.log(str[i]);
    //     result = result + str[i];
    // }
    // console.log(result)
    
    //2:đảo ngược  từ  i love -> evol i 
let str = 'i love';
let result = '';
for(i = str.length - 1 ; i >= 0;i--){
    console.log(str[i]);
    result = result + str[i];
}
console.log(result)
//while và di while
//while(condition){your code here}
// let a = 1;
// while( a < 10){
//     console.log(`this number ${a}`);
//     a++
// }
//do while
/*
do{
    your code here
}while(condition)
*/
// let b = 1;
// do{
//     b++;
//     console.log(`this number ${b}`);
// }while(b < 10);

//for off
// //for(variable of array){}
// let a = [];
// for(let value of number){
//     value += 10;
//     a.push(value)
// }
// console.log(a);

// for(let c of 'Dieu'){
//     console.log(c);
// }
// let c = [];
// for(let a of number){
//     a += 10;
//     c.push(a);
// }
// console.log(c);

for(let a of "dieu"){
    console.log(a);
}