window.addEventListener("load",function(){
    const imageCover = document.querySelector(".image-cover");
    const imageWrapper = document.querySelector(".image-wrapper");
    let imageWrapperWitdh = imageWrapper.offsetWidth;
    let imageWrapperHeight = imageWrapper.offsetHight;
    const image = document.querySelector(".image")
    imageCover.addEventListener("mousemove",handleHoverImage);
    
    function handleHoverImage(e){
        const px = e.pageX;
        const pY = e.pageY;
        image.style = `width: auto; height: auto; max-height: unset;`
        let imageWidth = image.offsetWidth;
        let imageHight = image.offsetHight;

    }   
})

