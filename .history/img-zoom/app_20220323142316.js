window.addEventListener("load",function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove",handleHoverImage);
    const imageWrapper = document.querySelector(".image-wrapper");
    const image =  document.querySelector(".image")
    function handleHoverImage(e){
        const pX = e.pageX;
        const pY = e.pageY;
    image.style = `width: auto; height: auto; max-height: unset`
    }
})


