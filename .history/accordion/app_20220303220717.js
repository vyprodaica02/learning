const accordionHeaders = document.querySelectorAll('.accordion-header');
[...accordionHeaders].forEach((item)=> e.addEventListener('click',handleClickAccordion));

function handleClickAccordion(e){
    console.log(e.target)
}