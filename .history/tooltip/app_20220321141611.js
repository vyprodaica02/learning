window.addEventListener("load",function(){
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter",(e)=>{
        const title = e.target.dataset.tooltip;//lấy giá trị thẻ span
        const tooltipDiv =  document.createElement("div");//tạo ra thẻ div
        tooltipDiv.className = 'tooltip-text';//có class name là tooltip
        tooltipDiv.textContent = title;//giá trị title trong span
        document.body.appendChild(tooltipDiv);// add html vào div tooltip
    })
})