window.addEventListener("load",function(){
    const imageCover = document.querySelector(".image-cover");
    const imageWrapper = document.querySelector("image-wrapper");
    const image = document.querySelector(".image")

    imageCover.addEventListener("mousemove",function(e){
        const pX = e.pageX;
        const pY = e.pageY;
        image.style = `witdt: auto; height: auto; max-height: unset;`
        let imageWidth = image.offsetWidth;
        let imageHight = image.offsetHight;

    })
})


