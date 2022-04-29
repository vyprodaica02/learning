//1. getAtrribure("attribute") atrribute -> thuộc tính(href, style,id,class,src,)
//chỉ select 1 cái
const link = document.querySelector(".links")
// lấy gí trị trong  class link
console.log(link.getAttribute("href"));
//cách lấy tất cả các attribute của queryselectorall
//sử dụng vòng lặp or foreach

const li = document.querySelectorAll('.item')
li.forEach((item) => {
    console.log(item.getAttribute('class'))
})
//2.selecter.setattribute('attribute',value)-> set giá trị attribute nào đó
link.setAttribute('target','_blank');

const listLink =  document.querySelectorAll('a.links');
listLink.forEach(item => item.setAttribute('target','_blank'));
//3. remove.attribute->xóa attribute của selector
const p = document.querySelector('.container');
p.removeAttribute('style')
//4. selecter.hasAttribute("atrribute")->kiểm tra selector có attribute nào không nếu có thì trả về true còn không trả về false
console.log(p.hasAttribute('class'))//true
console.log(p.hasAttribute('id'))//false

