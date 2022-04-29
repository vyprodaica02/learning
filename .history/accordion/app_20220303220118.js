const accordionHeaders = document.querySelectorAll('.accordion-header')
[...accordionHeaders].forEach(element => element.addEventListner('click',handleClickAccordion));