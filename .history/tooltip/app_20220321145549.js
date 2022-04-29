window.addEventListener("load",function(){
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter",(e)=>{
        const title = e.target.dataset.tooltip;//lấy giá trị thẻ span
        const tooltipDiv =  document.createElement("div");//tạo ra thẻ div
        tooltipDiv.className = 'tooltip-text';//có class name là tooltip
        tooltipDiv.textContent = title;//giá trị title trong span
        document.body.appendChild(tooltipDiv);// add html vào div tooltip
        const cords = e.target.getBoundingClientRect();
        // console.log(cords);
        const {top,left,width,height}  = cords;
        const tooltipHeight = tooltipDiv.offsetHeight;
        const tooltipWitd = tooltipDiv.offsetWidth;
        const triangleHeight = 20;
        tooltipDiv.style.left = `${left - witd / 2}px`;
        tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;

    })
    
})