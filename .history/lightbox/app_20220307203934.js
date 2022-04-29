
    const imges = document.querySelectorAll('.content img')//query tất cả các thẻ của content chứa img
    imges.forEach((item) => item.addEventListener('click',handlezoomImg));//duyệt từng phần tử của mảng img và add sự kiện click
    
    function handlezoomImg(even){
        // console.log(even.target)
        const img = even.target.getAttribute('src');
        const template = `<div class="lightbox">
        <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-prev"></i>
            <img src="${img}" alt="" class="lightbox-image">
                <i class="fa fa-angle-right lightbox-next"></i>
            
        </div>
        </div>`
        document.body.insertAdjacentHTML('beforeend',template);
    }

    // const images = document.querySelectorAll(".content img");
    // images.forEach((item) => item.addEventListener("click", handleZoomImage));
    // function handleZoomImage(event) {
    // const image = event.target.getAttribute("src");
    // const template = `
    // <div class="lightbox">
    //     <div class="lightbox-content">
    //     <i class="fa fa-angle-left lightbox-prev"></i>
    //     <img
    //         src="${image}"
    //         alt=""
    //         class="lightbox-image"
    //     />
    //     <i class="fa fa-angle-right lightbox-next"></i>
    // </div>
    // </div>`;
    // document.body.insertAdjacentHTML("beforeend", template);
    // }


    let index = 0;
    document.body.addEventListener("click",function(e){
        const lightImge = document.querySelector(".lightbox-image");
        let lightSrc = "";
        if(e.target.matches(".lightbox")){
            //remove lightbox out of dom
            e.target.parentNode.removeChild(e.target);
        }
        
        else if(e.target.matches('.lightbox-next')){
            lightSrc = lightImge.getAttribute("src");
            index = [...imges].findIndex(item => item.getAttribute('src') === lightSrc);
            index = index + 1;
            const newSrc = [...imges][index].getAttribute('src');
            lightImge.setAttribute('src',newSrc)
        }

        else if(e.target.matches('.lightbox-prev')){
            
        }
    })