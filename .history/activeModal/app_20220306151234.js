const button = document.querySelector('.button');
const template = `<div class="modal">
<div class="modal-content">
    <i class="fa fa-times modal-close"></i>
</div>
</div>`

button.addEventListener('click',()=>{
    document.body.insertAdjacentHTML('beforeend',template)
});

document.body.addEventListener('click',function(evnet) {
    // console.log(evnet.target)
    if(evnet.target.matches('modal-close'))
})