// const template = `<div class="lightbox">
// <div class="lightbox-content">
// <i class="fa fa-angle-left lightbox-prev"></i>
//     <img src="${img}" alt="" class="lightbox-image">
//         <i class="fa fa-angle-right lightbox-next"></i>
    
// </div>
// </div>`

const images = document.querySelectorAll('.content img');

images.forEach(item => item.addEventListener('click',function(e){
    const img = e.target.getAttribute(".img")
    const template = `<div class="lightbox">
<div class="lightbox-content">
<i class="fa fa-angle-left lightbox-prev"></i>
    <img src="${img}" alt="" class="lightbox-image">
        <i class="fa fa-angle-right lightbox-next"></i>
    </div>
    </div>`
    document.body.insertAdjacentHTML('beforeend',template)
}))