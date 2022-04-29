/*
<div class="lightbox">
    <div class="lightbox-content">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80" alt="" class="lightbox-img">
    </div>
    </div>
 */

    const imges = document.querySelectorAll('.content img')
    imges.forEach((item) => item.addEventListener('click',handlezoomImg));
    
    function handlezoomImg(even){
        // console.log(even.target)
        const img = even.target.getAttribute('src');
        const template = `<div class="lightbox">
        <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-next"></i>
            <img src="${img}" alt="" class="lightbox-img">
                <i class="fa fa-angle-right lightbox-next"></i>
            
        </div>
        </div>`
        document.body.insertAdjacentHTML('beforeend',template);
    }

    let index = 0;
    document.body.addEventListener("click",function(e){
        const lightImge = document.querySelector(".lightbox-image");
        let lightSrc = '';
        if(e.target.matches(".lightbox")){
            //remove lightbox out of dom
            e.target.parentNode.removeChild(e.target)

        }
        
        else if(e.target.matches('.lightbox-next')){
            // lightSrc = lightImge.getAttribute("src")
            // console.log('1')
        }
        
        else if(e.target.matches('.lightbox-prev')){
            
        }
    })