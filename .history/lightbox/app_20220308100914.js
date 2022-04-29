
    const imges = document.querySelectorAll('.content img')//query tất cả các thẻ của content chứa img
    imges.forEach((item) => item.addEventListener('click',handlezoomImg));//duyệt từng phần tử của mảng img và add sự kiện click
    //tạo ra hàm  để sử dụng sự kiện click
    function handlezoomImg(even){
        // console.log(even.target)
        const img = even.target.getAttribute('src');//tạo hàm lấy giá trị của ảnh
        const template = `<div class="lightbox">
        <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-prev"></i>
            <img src="${img}" alt="" class="lightbox-image">
                <i class="fa fa-angle-right lightbox-next"></i>
            
        </div>
        </div>`
        document.body.insertAdjacentHTML('beforeend',template);//tạo ra đoạn code html lightbox
    }

    let index = 0;// tạo ra index suất phát từ vị trí số 0
    document.body.addEventListener("click",function(e){// tạo sự kiện click để remove lightbox

        const lightImge = document.querySelector(".lightbox-image");//query vào class light-box để lấy giá trị lightbox
        if(!lightImge) return;
        // có lightimg
        let lightSrc = lightImge.getAttribute("src");// gán lightSrc = địa chỉ src lightbox(img)
            index = [...imges].findIndex(item => item.getAttribute('src') === lightSrc);
        // let lightSrc = "";//tạo biết lightSrc empty
        if(e.target.matches(".lightbox")){//nếu có lightbox thì thự hiện 
            //remove lightbox out of dom
            e.target.parentNode.removeChild(e.target);
        }
        
        else if(e.target.matches('.lightbox-next')){//lấy địa chỉ của đoạn class lightbox-next
            // lightSrc = lightImge.getAttribute("src");// gán lightSrc = địa chỉ src lightbox(img)
            // index = [...imges].findIndex(item => item.getAttribute('src') === lightSrc);//check vị trí của ảnh
            index = index + 1;//tăng đơn vị của index
            if(index >= imges.length-1) { index = 0}
            // const newSrc = [...imges][index].getAttribute('src');//truy suất giá trị ảnh của mảng imges
            // lightImge.setAttribute('src',newSrc)//update đường dẫn
        }

        else if(e.target.matches('.lightbox-prev')){
            // lightSrc = lightImge.getAttribute("src");// gán lightSrc = địa chỉ src lightbox(img)
            // index = [...imges].findIndex(item => item.getAttribute('src') === lightSrc);//check vị trí của ảnh
            index = index - 1;//tăng đơn vị của index
            if(index < 0) { index = imges.length-1}
            // const newSrc = [...imges][index].getAttribute('src');//truy suất giá trị ảnh của mảng imges
            // lightImge.setAttribute('src',newSrc)//update đường dẫn
        }
    })

