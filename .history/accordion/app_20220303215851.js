const accordionHeaders = document.querySelectorAll('.accordion-header')
[...accordionHeaders].array.forEach(element => element.addEventListner('click',handleClickAccordion));