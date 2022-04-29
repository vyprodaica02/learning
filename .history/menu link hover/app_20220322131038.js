
window.addEventListener("load",function(){
    const links = document.querySelectorAll(".menu-links");
    links = [...links];
    links.forEach(item=>item.addEventListener('mouseenter',handleHoverLink))

    function handleHoverLink(e){
        console.log(e.target)
    }
})