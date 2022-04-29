//1: viết 1 function kiểm tra   value có phải là object không
//this is object : {} [] null
// function isObject(value){
//     if(typeof value === 'object' && !Array.isArray(value) && value !== null){
//         console.log(typeof value)
//         return true
//     }
//     return false;
// }
// console.log(isObject({}))

// const b = {
//     name:20,
// };
// console.log(typeof b);
function isObject(value){
    if(typeof value === 'object' && !Array.isArray(value) && value !== null){
        return true
    }
    return false
}
console.log(isObject({}))
//2. {a: 1, b: 2} ->[['a',1],['b',2]]

function objectToArray(object){
    //check if not object  then stop
    if(!isObject(object)) return;
    //if it's an object then start
    // return Object.entries(object);
    //object.keys()trả về 1 mảng
    // const value = Object.keys(object).map((item)=>{return[item,object[item]]});//item => [item,object[item]]
    // return value;
    let result = [];
    for(let key in object){
        //hasOwnProperty(key)-> nếu object chưa key trả về true ngược lại thì false
        if(object.hasOwnProperty(key)){
            result.push([key,object[key]])
            console.log(object[key])
        }
    }
    return result;
}
console.log(objectToArray({a: 1, b: 2}))
//viết một chương trình có tên là without
//({a:1,b:2},'b')->{a:1}
function withOut(a,...b){
    const newObject = {...a};//tạo ra 1 object mới
    b.forEach((item) =>{//cho vòng lặp forEach để duyệt các phần tử của mảng
        delete newObject[item];//xóa phần tử trong  trong object
    });
    return newObject;
}
console.log(withOut({a:1,b:2,c:3,d:4},'a','b'))
//4.tạo ra chương trình so sánh 2 object nhập vào có bằng nhau hay không
//{a:1,b:2},{a:1,b:2}->true
//{a:1,b:2},{a:1,b:2,c:3}->false

//{a:1,b:2},{a:1,b:2}->true
function isEqualObject(a,b){
    const objkeysA = Object.keys(a);
    const objkeysB = Object.keys(b);
    if(objkeysA.length !== objkeysB.length) return false;
    const result = objkeysA.every((item) => a[item] === b[item])
    return result;
}
console.log(isEqualObject({a:1,b:2},{a:1,b:2}))
