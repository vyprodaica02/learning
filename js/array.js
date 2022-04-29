//mảng
const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';
//2: cách tạo mảng
//array literral
const students1 = [];
//cóntructor
const strudents = new Array();
//ví dụ mảng
//mảng phức tạp[0,flase,undefined,null,"evondev",["evondev",flase,1200.[]]] 
//mảng đơn giản[0,flase,undefined,null,"evondev"]
//[]: empty array-> mảng rỗng

const strudents2 = ["duc","ai","do","nam","thanh","trung","ai"];
//index: vị trí của phần tử(giá trik trong mảng và nó bắt đầu từ 0)
//length: độ dài cảu mảng nó đếm từ 1->
//truy xuất trong mảng -> students1[index]
console.log(strudents2[0]);
console.log(strudents2[1]);
//cách lấy phần tử cuối cùng trong mảng
console.log(strudents2[strudents2.length - 1]);
//các phương thức hay dùng của mảng
//length-> trả về độ dài của mảng
console.log('------độ dài của array-----')
console.log(strudents2.length)//5
//reverse ->đảo ngược giá trị trong bảng
console.log('------chưa reverse-----')
console.log(strudents2)
console.log('------array.reverse-----')
// console.log(strudents2.reverse())
//join -> nối các phần tử trong mảng thành chuỗi
console.log('------join.array-----')
console.log(strudents2.join());
//indexOf trả về vị trí của phần tử dc tìm thấy đầu tiên
console.log('------indexOf.array-----')
console.log(strudents2.indexOf('ai'));
//lastIndexOf trả về vị trí cuối dc tìm thấy
console.log('------lastIndexOf.array-----')
console.log(strudents2.lastIndexOf('ai'));
//push thêm phần tử vào cuối mảng
console.log('------push.array-----')
console.log(strudents2.push('javascript'));
console.log(strudents2);
//unshift thêm phần tử vào đầu mảng
console.log('------unshift.array-----')
console.log(strudents2.unshift('dev'));
console.log(strudents2);
//pop -> xóa phần tử cuối cùng trong mảng
console.log('------pop.array-----')
console.log(strudents2.pop());
console.log(strudents2);
//shift -> xóa phần tử đầu tiên trong mảng
console.log('------shift.array-----')
console.log(strudents2.shift());
console.log(strudents2);
//slice->tạo ra một mảng copy của mảng ban đầu
const animals = ['hổ','gà','chó','voi'];
const animals1= animals.slice();
console.log(animals1);
//slice(start)->vị trí index trong mảng
const animals2 = animals.slice(1);
console.log(animals2);
//slice(start,end)->vị trí index muốn và vị trí index cuối cùng mình muốn
const animals3=animals.slice(2,3);
console.log(animals3);
//slice(-1)->lấy vị trí end đến start
const animals4 = animals.slice(-3);
console.log(animals4)

//phương thức splice
const pets = ['dog','cat','bird','dragon'];
//spilce(start);
// const pets2 = pets.splice(2);
// console.log(pets2);//"bird" "dragon"
//splice(start,deleteCount) deleceCount là số lượng phần tử xóa hoặc thay thế
// const pest3 = pets.splice(0,1)
// console.log(pets)//'cat', 'bird', 'dragon'
//[]empty array:mảng rỗng
//splice(start,deleteCount,item1,...)delete phân tử mình muốn và thêm phần tử mình muốn
const pest4 = pets.splice(0,2,'dinasour','pig',10,false);
console.log(pets);
//sort() sắp xếp mảng các phần tử theo chuẩn unicode-16
const random = [1,999,9,5,10];
// console.log(random.sort());//1, 10, 5, 9, 999
//function(callBack)
const random2 = random.sort(function(a,b){
    if(a > b) return ;//sắp xếp theo tăng dần
    if(a < b) return ;//sắp xếp theo giảm dần
});
const random3 = random.sort((a,b) => a > b ? -1 : 1)//ternary operater
console.log(random2);
//method find:nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa mãn điều kiện nào đó
console.log('------find.array-----')
const number = [1,999,10000,5,09];
const findYourNumber = number.find((element) => element>10);
//nếu không tìm thấy phần element nào thì nó trả về undefind
console.log(findYourNumber);
console.log('------findIndex-----')
//nó sẽ trả về vị trí tìm thấy đầu tiên trong mảng thỏa mãn điều kiện nào đó
const findYourIndex = number.findIndex((element) => element<0);
//nếu không tìm thấy nó trả -1
console.log(findYourIndex);
console.log('------array.map-----')
//duyệt qua từng phần tử trong mảng và tạo ra một thằng mới mà không thay đổi thằng ban đầu
//bt: trả ra một mảng mới mà các số(giá trị) trong mảng cũ nhân 2
const list =[1,2,4,5];
const doubleList = list.map((value) => value*2)
console.log(doubleList);
console.log('------array.forEach-----')
const tripperList = list.forEach((value,index,array) => value * 3);
console.log(tripperList);// trả về undefined
console.log('------array.fillter-----')
//dùng đề filler(sàng lọc) các phần tử trong mảng thỏa mãn điều kiện nào đó
// const list =[1,2,4,5];
const fillterNumberGreaterThanTree = list.filter((item) =>{
    return item > 3;
})
console.log(fillterNumberGreaterThanTree);

console.log('------array.some-----')
//trả về true khi thỏa 1 điều kiện và ngược lại trả về false khi không thỏa mãn điều kiện
const someNumber = list.some((value) => value > 3);
console.log(someNumber)//true
console.log('------array.every-----')
//chỉ  trả về true khi tất cả điều kiện đều đúng hoặc 1 điều kiện sai tất cả đều sai
const everyNumber = list.every((value) => value > 3);
console.log(everyNumber)//false
console.log('------array.reduce-----')
//gôm các phần trong mảng thành 1
//cộng các giá trị trong mảng list
const totalNumber = list.reduce((a,b)=>a+b,0)
console.log(totalNumber);