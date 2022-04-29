//1.textContent-> lấy code html ra 
const container = document.querySelector(".container");
console.log(container.textContent)
//có thể thay đổi nội dung bằng textConten
const containers = document.querySelector('.containers');
containers.removeAttribute('style')
//2.innerText-> lấy nội dung trong html
console.log(container.innerText)
//3.innerHTML -> lấy ra nội dung selecter bao gồm cả html
console.log(container.innerHTML)
containers.innerHTML = `<div class ="demo">hello innerHTML</div>`//thay code này vào đoạn code html