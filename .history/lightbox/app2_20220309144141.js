// const template = `<div class="lightbox">
// <div class="lightbox-content">
// <i class="fa fa-angle-left lightbox-prev"></i>
//     <img src="${img}" alt="" class="lightbox-image">
//         <i class="fa fa-angle-right lightbox-next"></i>
    
// </div>
// </div>`

const imgae = document.querySelectorAll(".image");

imgae.forEach((item)=> item.addEventListener("click",function(e){
    const img = e.target.getAttribute('src');
    const template = `<div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
    <img src="${img}" alt="" class="lightbox-image">
            <i class="fa fa-angle-right lightbox-next"></i>
    </div>
    </div>`
}))