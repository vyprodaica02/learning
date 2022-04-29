// const name1 = 'xin chao';
// const name2 = " XXX ";
// const name3 = ` developer `;

// // console.log(name1 + name2 + name3);
// const name4 = `toi la duc ${name1} tat ca cac ban ${name2} minh la ${name3}`


// console.log(name4.length);

const myStry = "Fontend Developer";
// console.log(myStry.split(""));
// console.log(myStry.startsWith("F"));
// console.log(myStry.endsWith("r"));
console.log(myStry.substring(1,5)); //onte
console.log(myStry.substr(1,5)); //onten


const myStry3 = "   Fontend Developer   ";
// console.log(myStry3.trim().replace("Developer","Developer and Designer").toLowerCase().repeat(5));
console.log(
    `Result of mystry3 = ${myStry3
    .trim()
    .replace("Developer","Developer and Designer ")
    .toUpperCase()
    .repeat( 2 )}`
);
