
// window.addEventListener("load",function(){
//     const links = [...document.querySelectorAll(".menu-link")];
//     links.forEach((item)=>item.addEventListener('mouseenter',handleHoverLink))
//     const line = this.document.createElement("div");
//     line.className = 'line-effect';
//     document.body.appendChild(line);
//     function handleHoverLink(e){
//         const {left,top,width,height} = e.target.getBoundingClientRect();
//         const offsetBottom = 5;
//         line.style.width =`${width}px`;
//         line.style.left =`${left}px`;
//         line.style.top =`${top + height + offsetBottom}px`
//     }
//     const menu = document.querySelector('.menu');
//     menu.addEventListener("mouseleave",function(){
//         line.style.width= 0;
//     })
// })

window.addEventListener("load",function(){
    const links = [...document.querySelectorAll('.menu-link')];
    links.forEach((item)=> item.addEventListener("mouseenter",handleHoverLink));

    const line = document.createElement("div");
    line.className = 'line-effect';
    document.body.appendChild(line);
    function handleHoverLink(e){
        const {left,top,width,height}= e.target.getBoundingClientRect();
        // console.log(e)
        const offsetBottom = 5;
        line.style.width= `${width}px`
        line.style.left= `${left}px`
        line.style.top= `${top + height + offsetBottom}px`
    }
    
})