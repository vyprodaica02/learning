window.addEventListener("load",function(){
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter",(e)=>{
        const title = e.target.dataset.tooltip;
        const tooltipDiv =  document.createElement("div");
        tooltipDiv.className = 'tooltip-text';
        document.body.appendChild(tooltipDiv);
    })
})