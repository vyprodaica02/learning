const accordionHeaders = document.querySelectorAll('.accordion-header')
[...accordionHeaders].forEach((e)=> e.addEventListener('click',handleClickAccordion))