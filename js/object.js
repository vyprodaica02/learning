//có 2 cách khai báo object

// object literal
const objectListeral = {}
//object constructor
const objectConstructer = new Object();

const studen = {
    // name: giá trị(number,string,funtion,array),
    name:'duc',
    age: 22,
    male: true,
    hi: function() {
        console.log("hello");
    },
    //method
};
//  2 cách truy xuất giá trị của object
// 2.1 dot notation object.key

console.log(studen.name);

//2.2 bracket notation['key']
console.log(studen['age']);

// thay đổi giá trị của object
studen.age = 20;
console.log(studen);
studen['age'] = 21;
console.log(studen)
studen['duc'] = true;

studen.hello = function(){
    console.log('hl')
}
//xóa object delete

delete studen['age']

//for in
studen.mother = 70;
for(let key in studen){
    if(key === 'name'){
        console.log('hello name')
    }
    const value = studen[key];
    console.log(`${key}:${value}`)
}
//object.key()-> trả về một mảng chứa tất cả các key của object 
const keys = Object.keys(studen);
console.log(keys);
console.log(keys.length);
const value = Object.values(studen);
console.log(value);
//object.entries(): trả vè một mảng nested[[][]]gồm có keys và values
const entries = Object.entries(studen);
console.log(entries)//[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
//object.assign()

//cách 1
const a = {
    firstName:'Duc'
};
const b ={
    lastName:'Luong'
}
const c = Object.assign(a,b)
console.log(c);
//cách 2

const d = {...a , ...b };
console.log(d);
//object.freeze(object):ngăn chặn chỉnh sửa key và value của object
const car = {
    brand:'BMW',
}
const newCar = Object.freeze(car);
newCar.brand = 'audi'
console.log(newCar)//BMW
//object.seal():cho phép chỉnh sửa object nhưng không cho phép thêm ket:value ms
const use= {
    useName: 'Điếu',
    school:{
        name:'cao thang',
        room:{
            name:'it'
        },
    },
};
// const newUse = Object.seal(use);
// newUse.useName = 'Đức';
// newUse.lastName = 'lương';
// console.log(newUse);
//cách sao chép 1 object
const newUse = {...use};
newUse.useName = 'oni chan'

// console.log(use)
// console.log(newUse)
//sao chép mảng bằng cách object.assign
// const newUser2 = Object.assign({},use);
// // newUser2.school.name = 'Designer'
// console.log(newUser2)
// console.log(use)
//clone nested object
const newUser3 = JSON.parse(JSON.stringify(use));
newUser3.school.name='Designer';
console.log(use)
console.log(newUser3)

//this keyword
//this nó sẽ đề cập tới  object gần nhất
const studen2 = {
    // name: giá trị(number,string,funtion,array),
    name:'duc',
    age: 22,
    male: true,
    hi: function() {
        console.log(`my name is ${this.name} and i am ${this.age} year old`);
    },
    fullName:{
        name:"Lương Minh Đức"
    },
    //method
};

studen2.hi();
//nomar invok
console.log(studen2.fullName)
if(studen2.fullName){
    if(studen2.fullName.name){
        console.log(studen2.fullName.name);
    }
}
//optional chaining
console.log(studen2.fullName?.name);

//nomar
// const name = studen2.name;
// const age = studen2.age;
// const male = studen2.male;

//destruturing object 
//const{keys,...,keys} = nameObject
const {name,age,male,...rest} = studen2;
console.log(name,age,male,rest);

//normal function
// function whatYourName(name,age,school){
//     console.log(name,age,school);
// }

// whatYourName('');
//detruturing function parameter
function whatyourInfor(x){
    console.log(x.name,x.age,x.school);
}
const  newObj = {
    name:'minh duc',
    age:22,
    school:'Evondev',
};
whatyourInfor(newObj);


//object destructuring parameter
function whatyourInfor2({name,age,school,x}){
    console.log(name,age,school,x);
}
whatyourInfor2({
    name: "Điếu",
    age:22,
    school:"HUBT",
    x:'xxx'
})

