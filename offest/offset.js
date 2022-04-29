//1. offsetWidth, offsetHeight,offsetLeft,offsetParent,offsetTop
function log(value){
    console.log(value)
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth)//rọng
log(boxed.offsetHeight)//cao
log(boxed.offsetLeft)//vị trí bên trái
log(boxed.offsetTop)// phía trên
log(boxed.offsetParent)//lấy phần tử tra
//2.clientWidth,clientHeight,clientLeft,clientTop;
log(boxed.clientWidth)//lấy độ rọng của phần tử trừ đi border
log(boxed.clientHeight)// lấy chiều cao phần tử trừ đi border
log(boxed.clientLeft)// lấy kicks thước so vs bên trái border
log(boxed.clientTop)//lấy kích thước phía trên so vs bên trái  border
//3.window,innerWidth,Window.outerWidth,window.innerHeight,window.outerHeight
log(window.innerHeight)
log(window.outerHeight)
log(window.innerWidth)
log(window.outerWidth)
//4.selector.getBoundingClientRect();-> lấy ra tọa độ,kích thước của phần tử
log(boxed.getBoundingClientRect());
/* 
left,x: vị trí của khối so vs bên trái
top: vị trí của khối so vs phía bên trên
bottom: chiều cao của khối + top
right: độ rọng của khối +left
width: độ rộng
height: chiều cao
*/
// const li = document.getElementsByTagName("li");
const li2 = document.querySelectorAll("li");
// log(li);
log(li2);
// điểm giống: có thể truy cập bằng index,có độ dài(lenght),giống mảng nhưng không hẳn là mảng tức là không sử dụng dc nhưng phương thức như pop,shift,push,map,filter
//HTML collection: không sử dụng được forEach
//NodeList: sử dụng dc forEach

//document.title
log(document.title)
//đổi tên title 
document.title = 'hello javascript';
//document.head
log(document.head)
//<meta name="viewport" content="width=device-width, initial-scale=1.0">

const meta = document.createElement("meta");
meta.setAttribute('name','viewport');
meta.setAttribute('content','width=device-width, initial-scale=1.0')
// document.head.appendChild(meta);
//cách 2;
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
log(head)
//insertBefore
//parentNode.insertBefore(newnode,existingnode)
const ul = document.querySelector('ul')
document.body.insertBefore(ul,document.querySelector('h3'))
//replaceChild
//node.replaceChild(newnode,oldnode)
const span = document.createElement('span');
span.textContent = 'abc';
document.body.replaceChild(span,document.querySelector('.boxed'))
//convert HTML collection, nodeList to array
const li = document.getElementsByTagName("li");
//Array.from(HTML collection or nodeList)
//[...HTMLcollect],[...nodeList]
[...li].filter((item) => item);
log(li)

//html: document.documentElement
//body:document.body
//head:document.head
//title:document.title