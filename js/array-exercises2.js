// /* cho 1 mảng gồm nhiều giá trị [1,1000,false,null,'evondev',"",undefined,"javascript",1,2,3]
// viết chương trình loại bỏ các giá trị falsy ra khổi mảng chỉ giữ lại các giá trị truthy. gợi ý
// giá trị falsy là 0,null,undefined false "" nan*/
// const array = [1,1000,false,null,'evondev',"",undefined,"javascript",1,2,3];//filter xàng lọc mảng có điều kiện
// // const filerFalsy = array.filter(item => Boolean(item));
// // console.log(filerFalsy);
// const filterFalsy = array.filter(Boolean);
// console.log(filterFalsy)
// /*2: cho 1 mảng phức tạp [[1,2,3,[false,null]],[1,5,6,['javascript']],[888,666,[90]]].và kết quả
// mong muốn là [1,2,3,false,null,1,5,6,'javascript',888,666,90] */

// const complexArray = [[1,2,3,[false,null]],[1,5,6,['javascript']],[888,666,[90]]];
// // const result = complexArray.flat(2);
// // console.log(result);

// const result = complexArray.flat(2);
// console.log(result);
// //3 đảo ngược số nguyên ví dụ 1234->4321
// function reveseNumber(number){
//     const value = parseInt( number.toString().split("").reverse().join("")) *Math.sign(number);
//     console.log(value)
// }
// reveseNumber(-1234)
// /*4. viết chương trình có tên là fizzBuzz vs đầu vào là một số nguyên , và cho  chạy từ 1 cho tới số
// nguyên đó rồi kiểm tra nếu số chia hết cho 2 thì in ra chữ'fizz', nếu chia hết cho 3 thin in ra chữ
// 'Buzz' nếu chia hết cho cả 2 và 3 thì in ra 'FizzBuzz'*/

// function fizzBuzzz(number) {
//     for(i = 1 ; i <= number; i++ ){
//         if(i % 2 === 0 && i % 3 === 0){
//             console.log(`${i} fizzBuzz`);
//         }else if(i % 2 === 0){
//             console.log(`${i} fizz`);
//         }else if(i % 3 === 0){
//             console.log(`${i} Buzz`);
//         }
//     }
// }
// // fizzBuzzz(15);
// //cho 1 chuỗi bất kì, đếm số lượng kí tự 'vowels' có trong chuỗi 
// // vowel là các kí tự ueoai
// // ví dụ 'evondev' -> 3;

// function countVowel(string){
//     let count = 0;
//     const character = 'ueoai';
//     for(c of string.toLowerCase()){
//         if(character.includes(c))
//         count++
//     }
//     console.log(count);
// }
// // countVowel('evondev');

// //6: cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. viết một function trả về một mả
// // vs các giá trị unique.kết quả trả về [1,2,3,7,6]

// function unique(arr){
//     let result = [];
//     if(!Array.isArray(arr)) return result;
//     for(let i = 0; i < arr.length ; i++ ){
//         if(!result.includes(arr[i]))
//         result.push(arr[i])
//     }
//     return result;
// }
// console.log(unique([1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]))
//7. viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dự vào một số nguyên đàu vào. ví dụ 
// ([1,2,3,4,5],2) -> [[1,2] ,[3,4],[5]
function spliArray(arr,number){
    let result = [];
    for(let index = 0 ; index < arr.length; index += number ){
        result.push(arr.slice(index,number + index));
    }
    console.log(result)
    return result;
}
spliArray([1,2,3,4,5,6],3)

// function splitArray(arr,number){
//     let result = [];
//     let index = 0;
//     while(index < arr.length){
//         console.log(arr.slice(index,number + index));
//         index = index + number;
//         console.log(arr);
//     }
// }
// splitArray([1,2,3,4,5,6],3);