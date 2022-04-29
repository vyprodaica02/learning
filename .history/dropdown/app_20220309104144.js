const dropdowSelect = document.querySelector('.dropdown__select');
const dropdowlist = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('dropdown__item')
dropdowSelect.addEventListener('click',function(event){
    console.log(event.target)
    dropdowlist.classList.toggle("show");
})