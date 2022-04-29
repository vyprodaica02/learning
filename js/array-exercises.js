//1: đảo ngược 1 string. ví dụ"my name is đức" -> duc is name my
let reverseString = (str) => str.split(" ").reverse().join(' ');
console.log(reverseString("my name is đức"));
//2: đảo ngược 1 chuỗi cùng vs các kí tự của nó
function reverseWord(str){
    if(!str) return null;
    const arrStr = str.split(" ").map(item => item.split("").reverse().join(""));
    return arrStr.reverse().join(" ");
}
console.log(reverseWord("i love"));

//3.in hoa chữ cái đầu tiên trong ví dụ : 'my name is duc' -> 'My Name Is Duc'
// function capitalizeWord(word =" "){
//     if(word.length === 0) return 0;
//     let newWord = word.toLowerCase().charAt(0).toUpperCase();//word.toLowerCase().charAt(0).toUpperCase();
//     let otherWord = word.slice(1).toLowerCase()
//     return `${newWord}${otherWord}`
// }
// console.log( capitalizeWord("name"));
// function capitalize(str){
//     if(!str) return null;
//     let reverseStr = str.split(" ").map((item => capitalizeWord(item)));
//     return reverseStr.join(" ");
// }
// console.log(capitalize('my name is duc'));

function capitalizeWord(word = ""){
    if(word.length === " ") return 0;
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    let otherWord = word.slice(1).toLowerCase();
    return `${newWord}${otherWord}`
}
//3.in hoa chữ cái đầu tiên trong ví dụ : 'my name is duc' -> 'My Name Is Duc'
function capitalize(str){
    if(!str) return console.log("nhập chuỗi kí tự nào đó");
    let toUperTheFirtWord = str.split(" ").map(capitalizeWord).join(" ");
    console.log(toUperTheFirtWord);
}
capitalize('my name is đức');