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
        const img = even.taget.getAttribute('src');
        const template = `<div class="lightbox">
        <div class="lightbox-content">
            <img src="img">
        </div>
        </div>`
        document.body.insertAdjacentHTML('beforeend',template);
    }