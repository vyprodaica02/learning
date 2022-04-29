const toggle = document.querySelector('.menu-toggle')
const menu  = document.querySelector('.menu')

toggle.addEventListener('click',(e)=>{
    e.target.classList.toggle('fa-times')
    e.target.classList.toggle('fa-bars')
    menu.classList.toggle('is-show')
});

document.addEventListener('click',(e)=>{
    //event.target.matches("selector")
    //selector.contains: kiểm tra element có chứa elemnt khác không
    if(!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
        menu.classList.remove('is-show');
        toggle.classList.remove('fa-times');
        toggle.classList.add('fa-bars')
    }
})