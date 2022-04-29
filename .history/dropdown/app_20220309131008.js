const dropdownSelect = document.querySelector('.dropdown__select');
const dropdownlist = document.querySelector('.dropdown__list');
dropdownSelect.addEventListener('click',function(e){
    console.log(e.target)
    dropdownlist.classList.toggle('show')
})