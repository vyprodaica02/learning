const accordionHeaders = document.querySelectorAll('.accordion-header');
[...accordionHeaders].forEach((item)=> item.addEventListener('click',handleClickAccordion));

function handleClickAccordion(e){
    // console.log(e.target)
    const content = e.target.nextElementSibling;
    // console.log(content.scrollHeight)
    content.style.height = `${content.scrollHeight}px`
    content.classList.toggle('is-active');
    const icon = e.target.querySelector('.icon');
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");

}