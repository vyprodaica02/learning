const dropdowSelect = document.querySelector('.dropdown__select');
const dropdowItem = document.querySelectorAll('.dropdown__item');
const dropdowSelected = document.querySelector(".dropdown__selected");
const dropdowlist = document.querySelector('.dropdow__list');
dropdowSelect.addEventListener('click',function(event){
    console.log(event.target)
    dropdowlist.classList.toggle('show')
})