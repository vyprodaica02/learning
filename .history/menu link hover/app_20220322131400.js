
window.addEventListener("load",function(){
    const links = [...document.querySelectorAll(".menu-link")];
    links.forEach((item)=>item.addEventListener('mouseenter',handleHoverLink))
    const line = this.document.createElement("div")
    function handleHoverLink(e){
        console.log(e.target)
    }
})