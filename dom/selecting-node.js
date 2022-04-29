//Dom là gì
//document object model
// dom attribute
//dom node
//2.selecting nodes
//2.1 document.queryselector()-> trả về 1 node nếu tồn tại
//selectors: header,p,body,heading
// const singleNode = document.querySelector('h1');//thẻ h1
// const a = document.querySelector(".container");//class
// const b = document.querySelector('#spiner');//id
// console.log(singleNode)
// console.log(a);
// console.log(b);
/*/2.2 document.queryslecterAll()-> trả về một nodeList chứa danh sách các node
nếu không có thì trả về empty
-nó có thể loop và sử dụng forEach
-nó giống array là có thể loop nhưng không thể sử dụng được các phương thức
như push,pop,shift
*/
const multiItem = document.querySelectorAll('.item');
// sử dụng loop
for(let i = 0; i < multiItem.length;i++){
    console.log(multiItem[i]);
}
// console.log(multiItem)
//2.3 document.getElementsByclassName("header")-> trả về một
// HTMLCollection chứa danh sách các node, nếu không có thì trả về
//empty
const classNode = document.getElementsByClassName('item');
console.log(classNode)
//2.4  document.getElementsByTagName('tagname');
const tageNode = document.getElementsByTagName('li')
console.log(tageNode)
//2.5 document.getElementById("id")
const idNode = document.getElementById('spiner')
const singleNode = document.querySelector('#spiner');//thẻ h1
