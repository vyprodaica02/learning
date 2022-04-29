const accordionHeaders = document.querySelectorAll('.accordion-header');
[...accordionHeaders].forEach((item)=> item.addEventListener('click',handleClickAccordion));

function handleClickAccordion(e){
    // console.log(e.target)
    const content = e.target.nextElementSibling;
    // console.log(content.scrollHeight)
    content.style.height = `${content.scrollHeight}px`
    //scrollHeight: chiều cao của phần tử bao gồm cả padding
    content.classList.toggle('is-active');
    if(!content.classList.contains("is-active")){
    content.style.height = `0px`

    }
    const icon = e.target.querySelector('.icon');
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");

}