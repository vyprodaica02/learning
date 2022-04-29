//parentNode,parentElement,removeElement
const span = document.querySelector('span')
console.log(span.parentNode);
console.log(span.parentElement);
//selecter.parentNode hoặc selector.parentElement.removeChild(selecter)
// span.parentNode.removeChild(span)
//2. nextElementSibling: chọn phần tử đứng sau nó
const next = span.nextElementSibling;
console.log(next)
// previousElementSibling: chọn phần từ đứng trc nó
const previousLink = span.previousElementSibling;
console.log(previousLink) 
//3.childNode:trả về hết các node bên trong bao gồm cả textNode 
console.log(span.childNodes)
//children:trả về các node không bao gồm textNode
console.log(span.children)
//4. firstchild: lấy phần tử con đầu tiên bao gồm textNode
console.log(span.firstChild)
//firstElementChild
console.log(span.firstElementChild)
//5.lastChild,lastElementChild
console.log(span.lastChild)
console.log(span.lastElementChild)

//6.nextSibling vs previousSibling

