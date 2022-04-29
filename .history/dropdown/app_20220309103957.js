const dropdowSelect = document.querySelector('.dropdown__select');
const dropdowlist = document.querySelector('.dropdow__list');
dropdowSelect.addEventListener('click',function(event){
    console.log(event.target)
    dropdowlist.classList.toggle("show");
})