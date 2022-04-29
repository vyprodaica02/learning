const accordionHeaders = document.querySelectorAll('.accordion-header');
[...accordionHeaders].forEach((item)=> item.addEventListener('click',handleClickAccordion));

function handleClickAccordion(e){
    // console.log(e.target)
    e.target.nextElementSibling.classList.toggle('is-active');
    const icon = e.target.document.querySelector('.icon');
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");

}