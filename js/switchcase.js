// const  fruit = 'apple';
// if(fruit === 'apple'){
//     console.log(`you like to apple`);
// }
// if(fruit === 'lemon'){
//     console.log(`you like eat lemon`);
// }
// if(fruit === `watermelon`){
//     console.log("you like to eat watermelon")
// }

// switch (fruit) {
//     case 'apple':
//         console.log(`you like to apple`);  
//             break;
//     case 'apple':
//         console.log(`you like to apple`);             
//             break;
//     case 'lemon':
//         console.log(`you like to lemon`);       
//             break;
//     default:
//         console.log(`you like to origen`); 
//             break;
// }

const yourAge = 13;
// let message = '';

// if (yourAge) {
//     message = 'you are adutl';
// }else{
//     message = 'you are still a child';
// }
// console.log(message);

let message2 = yourAge >= 18 ? "you are adult" : 'you are still a child';
console.log(message2);

let message3 = yourAge >= 18 ? "you are adult" : yourAge <= 10 ? "you are still a child" : "you are the young boy"
console.log(message3)