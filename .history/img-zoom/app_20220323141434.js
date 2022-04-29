window.addEventListener("load",function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove",handleHoverImage);
    const imageWrapper = this.document.querySelector(".image-wrapper");
    const imgae =  this.document.querySelector(".image")
    function handleHoverImage(e){
        const pX = e.pageX;
        const pY = e.pageY;
    Image.style = `width: auto; height: auto;max-height: unset`
    }
})