// viết một function so sánh 2 số a và b tìm ra số lớn nhất
// function compare(a = 0, b = 0){
//     if(typeof a !== "number" || typeof b !== "number"){
//         console.log('please enter a valid number');
//     return 0;
//     }
//     return Math.max(a,b);
// }

// console.log(compare(100,'1000'));


// function capitalize(word = ''){
    //     if(word.length === 0){
        //         return null;
        //     }
        //     let newWord = word.toLowerCase().charAt(0).toLocaleUpperCase();
        //     let otherWord = word.slice(1).toLowerCase();
        //     return `${newWord}${otherWord}`;
        // }
        
        // console.log(capitalize('DUCCCCCCCCCCCCCC'));
        
 // in hoa chữ cái đầu trong ví dụ như tuan -> Tuan; NAM -> Nam;

function capitalize(word = ''){
    if(word.length = '') return 0;
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    let otherWord = word.slice(1).toLowerCase();
    return `${newWord}${otherWord}`;
}

console.log(capitalize('DUC'));