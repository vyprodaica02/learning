const dropdowSelect = document.querySelector('.dropdown__select');
const dropdownItem = document.querySelectorAll('dropdown__item');
const dropdowlist = document.querySelector('.dropdown__list');
const dropdownSelected = document.querySelector(".dropdown__selected");
dropdowSelect.addEventListener('click',function(event){
    console.log(event.target)
    dropdowlist.classList.toggle("show");
})

dropdownItem.forEach((item) => item.addEventListener('click',function(event){
    console.log(event.target)
    // const text = event.target.querySelector('.dropdown__text').textContent;
    // dropdownSelected.textContent = text;
}))