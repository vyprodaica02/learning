//thêm xóa sửa node trong javascript
//1, tạo thêm element trong javascript: document.createElement("tag");
// const div = document.createElement("div");
// //2.selector.appenChild("")
// const body = document.body;//document.querySelecter("body")
// body.appendChild(div);
// //cách thêm class vào element
// div.classList.add("container")
// div.className = "caontainer wrapper"
// //cách thêm nội dung vào element
// div.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto. Repudiandae, ea fugit cupiditate ipsa natus voluptatibus officia? Harum maxime illum debitis, ut voluptate quidem consequatur natus id optio facilis?"

// div.innerHTML= `<div class = "contain" ><h3> </h3></div>`
// div.setAttribute("data-name","duc")
// const div = document.createElement("div");
const body = document.body;
// body.appendChild(div);
// div.innerHTML = '<div class ="card"><img src="https://source.unsplash.com/ramdom" alt="" class = "card-image"></div>'
//bài tập tạo html
const card = document.createElement("div");//tạo thẻ div
card.setAttribute("class","card");//tạo class là card
const cardImg = document.createElement("img");//tạo img
// cardImg.setAttribute("src","https://source.unsplash.com/random");//setatribute là src
// cardImg.setAttribute("alt"," ");//setatribute là alt
cardImg.setAttribute("class","card-image");//setatribute là class
card.appendChild(cardImg)//đưa atribute của cardimg vào card
body.appendChild(card)//đưa class card vào div
//3.ducument.createTextNode: 
const text = document.createTextNode("hello my name is Điếu")
const h1 = document.createElement("h1");
h1.appendChild(text)
body.appendChild(h1)
//4.cloneNode:sao chép 1 element
const clone = h1.cloneNode(true)
body.appendChild(clone)
//5.element.hasChildnodes -> kiểm tra element có phần tử con không 
console.log(h1.hasChildNodes())