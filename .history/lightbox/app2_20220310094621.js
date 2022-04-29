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
    document.body.insertAdjacentHTML('beforeend',template)
}))

let index = 0;
document.body.addEventListener("click",function(e){
    const lightboxImg = document.querySelector(".lightbox-image");
    let lightSrc = '';
    if(e.target.matches('.lightbox')){
        e.target.parentNode.removeChild(e.target)
    }else if(e.target.matches('.lightbox-next')){
        lightSrc =  lightboxImg.getAttribute('src');
        index = [...imgae].findIndex(item => item.getAttribute('src') === lightSrc)
        index = index + 1;
        if(index > imgae.length - 1 ){
            index = 0;
        }
        const newSrc = [...imgae][index].getAttribute("src");
        lightboxImg.setAttribute('src',newSrc);
    }else if(e.target.matches('.lightbox-prev')){
        lightSrc =  lightboxImg.getAttribute('src');
        index = [...imgae].findIndex(item => item.getAttribute('src') === lightSrc)
        index = index - 1;
        if(index < 0){
            index = imgae.length - 1
        }
        const newSrc = [...imgae][index].getAttribute("src");
        lightboxImg.setAttribute('src',newSrc);
    }
})