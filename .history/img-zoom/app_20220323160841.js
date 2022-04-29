window.addEventListener("load",function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove",handleHoverImage);
    const imageWrapper = document.querySelector(".image-wrapper");
    let imageWraperWidth = imageWrapper.offsetWidth;
    let imageWraperHeight = imageWrapper.offsetHeight;
    const image =  document.querySelector(".image")
    function handleHoverImage(e){
        const pX = e.pageX;
        const pY = e.pageY;
    image.style = `width: auto; height: auto; max-height: unset`
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let ratioX = imageWidth / imageWraperWidth / 2;
    let x = pX * ratioX;
    let y = pY;
    image.style = `left: ${-x}px; top: ${0}px; width: auto; height: auto; max-height: unset , transform: none`
}
})


