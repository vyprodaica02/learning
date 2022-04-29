console.log(Number("4.5"));//4.5
console.log(Number("4"));//4
console.log(Number("đâsd"));//nan
console.log(Number(undefined));//nan
console.log(Number(null));//0
console.log(Number(false));//0
console.log(Number(true));//1
console.log(Number(""));//0
console.log(Number(NaN));//nan
console.log(String(4.5));//"4.5"
// boolean value true false
console.log(`boolean of zero: ${Boolean(0)}`);//false
console.log(`boolean of zero: ${Boolean(false)}`);//false
console.log(`boolean of zero: ${Boolean(null)}`);//false
console.log(`boolean of zero: ${Boolean(undefined)}`);//false
console.log(`boolean of zero: ${Boolean("")}`);//false
console.log(`boolean of zero: ${Boolean(NaN)}`);//false
console.log(`boolean of one: ${Boolean(true)}`);//true
console.log(`boolean of one: ${Boolean("đức")}`);//true
// weird
console.log(10 + 10); //20
console.log(10 + `10`);// 1010;
console.log(`10 + 20` + `10`);//10 + 2010
console.log(null + ""); // `null`
console.log(null + undefined);//NaN
console.log(false - true);//-1
console.log(`` - 1); //-1
console.log(null + 10);
// toán tử logic
console.log("toan tu logic");
console.log(5 > 7 && 8 >3);// false
console.log(5 > 7 || 8 >3);// true

const amIwrong = true;
console.log(!amIwrong);
// == loose equality and === strict equality
console.log("=== ==");
console.log("10" == 10); //true
console.log("10" === 10); //false













