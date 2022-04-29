window.addEventListener("load",function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove",handleHoverImage);
    const imageWrapper = document.querySelector(".image-wrapper");
    const imgae =  document.querySelector(".image")
    function handleHoverImage(e){
        const pX = e.pageX;
        const pY = e.pageY;
        console.log(e.target.pageX)
    Image.style = `width: auto; height: auto;max-height: unset`
    }
})