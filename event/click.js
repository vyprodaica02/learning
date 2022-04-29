//addEventListener
    // const button = document.querySelector('.button')
    // const span = document.querySelector('.button span')
    // button.addEventListener("click",function(e){
    //     // e.stopPropagation();
    //     // e.stopImmediatePropagation();
    //     console.log('click me')
    // },{
    //     capture: true
    // })
    // button.addEventListener("click",function(e){
    //     // e.stopPropagation();
    //     console.log('click me')
    // },{
    //     capture: true
    // })
    // span.addEventListener('click',()=>{
    //     console.log('click me span')
        
    // },{
    //     capture: true
    // })
//bubbling: noi bot
//su kien click chay tu trong ra ngoai
//target vs currentTarget
// button.addEventListener('click',function(e){
//     console.log(e.target);
//     //event.taget: nó sẽ chọn chính xác elemnt mà mình click
//     console.log(e.currentTarget)
//     //event.curentTarget nó sẽ chọn phần tử mà mình click
// })

// //event.preventDefault();
// const link = document.querySelector('.link');
// link.addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log('click me')
// })

//bai tap
// const button = document.querySelector('.change')
// button.addEventListener('click',handleChangeColer)
// const colors = ['#ffa400','#00aefd','#07a787','#ffb86c','#2979ff','#e74c3c']
// function handleChangeColer(){
//     const color =colors[Math.floor(Math.random()*colors.length)]
//     // document.body.setAttribute('style','backgroundColor: red')
//     // document.body.setAttribute("style","background-Color: color")
//     document.body.style.backgroundColor = color
// }

// const button = document.querySelector(".change");
// // truy suất vào button
// const colors = ['#ffa400','#00aefd','#07a787','#ffb86c','#2979ff','#e74c3c']
// //tạo mã màu để random
// button.addEventListener('click',()=>{
//     const color = colors[Math.floor(Math.random()*colors.length)]
//     document.body.style.backgroundColor = color;
// })

const link = document.querySelector('.link');

link.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log('click me')
    // console.log(e.target)
    // console.log(e.target.style)
    // e.target.style.color = 'red';

    //lấy custom atrribute data-abc
    //dataset.name
    const name = e.target.dataset.nameXzr;
    console.log(name)
})