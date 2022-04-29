//active modal
// const modal = document.querySelector(".modal");
// if(modal){
//     setTimeout(()=>{
//         modal.classList.add("modal-show");
//     },3000)
// }

// tao bang js
// const  template = `
//     <div class="modal">
//     <div class="modal-content">
//     <i class="fa fa-times modal-close"></i>
//     <div class="modal-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat repellendus expedita molestias doloribus! Omnis impedit inventore ipsam quidem voluptate cum, unde natus facilis dicta perferendis debitis. Nam doloremque minima consequatur.</div>
//     <div class="modal-action">
//         <button class="modal-submit">confirm</button>
//         <button class="modal-cancel">cancel</button>
//     </div>
// </div>
// </div>`;

// const body = document.body
// body.insertAdjacentHTML("afterbegin",template)

// const modal = document.querySelector(".modal");
// if(modal){
//     setInterval(()=>{
//         modal.classList.add("modal-show")
//     },3000)
// }

const modal = document.createElement("div");
modal.classList.add("modal");
// modal.classList.add("modal-show");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose)
const modalDesc = document.createElement('div')
modalDesc.classList.add("modal-desc");
modalDesc.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat repellendus expedita molestias doloribus! Omnis impedit inventore ipsam quidem voluptate cum, unde natus facilis dicta perferendis debitis. Nam doloremque minima consequatur`
modalContent.appendChild(modalDesc)
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction)
const modalSubmit = document.createElement("button");
modalSubmit.classList.add('modal-submit')
const textSubmit = document.createTextNode('confirm');
modalSubmit.appendChild(textSubmit)
modalAction.appendChild(modalSubmit)
const modalCent = document.createElement("button");
modalCent.classList.add('modal-cancel')
const textCent = document.createTextNode("cancel");
modalCent.appendChild(textCent)
modalAction.appendChild(modalCent)
document.body.appendChild(modal);

const showModal = document.querySelector(".modal");
if(showModal){
    setInterval(()=>{
        modal.classList.add("modal-show");
    },3000)
}