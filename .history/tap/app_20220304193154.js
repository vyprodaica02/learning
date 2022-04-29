const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');
// let tabContent = [...tabContents];
// [...tabItems].forEach((item)=> item.addEventListener('click',(e)=>{
//     // xóa hết tất cả các class active ở các tab-item
//     console.log(e.target)
//     tabItems.forEach((item)=> item.classList.remove('active'))
//     e.target.classList.add('active');
//     const tabNumber = parseInt(e.target.dataset.tab)
//     tabContent.forEach((item)=> item.classList.remove('active'))
//     [...tabContents][tabNumber - 1].classList.add('acitve')

// }))

// [...tabItems].forEach((item) => item.addEventListener('click',handleTableClick));
// function handleTableClick(e){
//     // console.log(e.target);
//     [...tabItems].forEach((item)=> item.classList.remove('active'))
//     e.target.classList.add('active');
//     const tabNumber = e.target.dataset.tab;
//     [...tabContents].forEach((item)=> {
//         item.classList.remove('active')
//         if(item.getAttribute('data-tab') ===  tabNumber)  item.classList.add('active')
//         // if(item.getAttribute('data-tab') === tabNumber)
//         // {
//         //     item.classList.add('active')
//         // }
//     })
// }