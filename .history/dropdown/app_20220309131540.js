const dropdownSelect = document.querySelector('.dropdown__select');
const dropdownlist = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected")
dropdownSelect.addEventListener('click',function(e){
    console.log(e.target)
    dropdownlist.classList.toggle('show');
})

dropdownItem.forEach((item) => item.addEventListener('click',function(event){
    const text = event.target.querySelector('.dropdown__item').textContent;

}))