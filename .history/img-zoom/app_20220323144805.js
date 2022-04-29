window.addEventListener("load",function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove",handleHoverImage);
    let imageWraperWidth = imageWrapper.offsetWidth;
    let imageWraperHeight = imageWrapper.offsetHeight;
    const imageWrapper = document.querySelector(".image-wrapper");
    const image =  document.querySelector(".image")
    function handleHoverImage(e){
        const pX = e.pageX;
        const pY = e.pageY;
    image.style = `width: auto; height: auto; max-height: unset`
    }
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;

    console.log(imageWraperHeight, imageWraperWidth)

})


