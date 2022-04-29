const dropdownSelect = document.querySelector('.dropdown__select');
const dropdownlist = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected")
const dropdown = document.querySelector('.dropdown')
const dropdownCaret = document.querySelector('.dropdown__caret')
//dropdown select
dropdownSelect.addEventListener('click',function(e){
    console.log(e.target)
    dropdownlist.classList.toggle('show');
})
//dropdown delete item
dropdownItem.forEach((item) => item.addEventListener('click',function(event){
    const text = event.target.querySelector('.dropdown__text').textContent;
    dropdownSelected.textContent = text;
    dropdownlist.classList.remove("show")
}))
//dropdown delete item
document.addEventListener('click',(e)=>{
    if(!dropdown.contains(e.target)){
        dropdownItem.classList.remove("show")
    }
})