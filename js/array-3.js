//By value vs By referrences
//By value: giá trị lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2)//true
//by referrences
const arr1 = [1,2];
const arr2 = [1,2];
console.log(arr1 === arr2)//false
//JSON.stringify(value)-> convert giá trị sang dưới dạng JSON string
//toString()
//[1,2,3].toString()-> '1,2,3'
//JSON.stringify([1,2,3])->'[1,2,3]'
//[1,2,3]
//JSON.parse(['[1,2,3]'])->//[1,2,3]
console.log(JSON.stringify([1,2,3]))
console.log(JSON.parse(['[1,2,3]']))
const arr1Str = (JSON.stringify(arr1))
const arr2Str = (JSON.stringify(arr2))
console.log(arr1Str === arr2Str)//true
//clone lại mảng.
const student = ['a','b','c','d','e'];
//sử dụng method slice
const sliceStudent = student.slice();
// sliceStudent.pop();
console.log(sliceStudent)
//2.spread operater[...array];
const spreadStudent =[...student];
console.log(spreadStudent);
//gộp mảng
//method concat
const array1 =[1,2];
const array2 =[3,4];
const array3 =[5,6];
//cách 1 concat
const mergeArray1 = array1.concat(array2,array3);
console.log(mergeArray1)
//cách 2 spread operater
const mergeArray2 = [...array1,...array2,...array3];
console.log(mergeArray2)
//destructuring array
const toys =['ball','sword','arrow','magic','water','fire'];
//
const [a,b,c,...rest] = toys;
console.log(a,b,c)
//rest parameter
console.log(rest)
//áp dụng vào function
function demo(a,...rest){
    console.log(a, rest);
}
demo(1,2,3,4,5);
