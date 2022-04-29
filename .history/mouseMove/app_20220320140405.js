const btn = document.querySelector(".btn");
// mousemove, mouseover,mouseenter,mouseleave
// btn.addEventListener('mousemove',function(){
//     console.log("mousemove")
// })

// // btn.addEventListener('mouseover',function(){
// //     console.log("mouseover")
// // })

// btn.addEventListener('mouseenter',function(){
//     console.log("mouseenter")
// })

btn.addEventListener('mouseleave',function(){
        console.log("mouseleave")
    })
// pageX,pageY,clinetX,clinetY;

document.addEventListener('mousemove',function(){
    console.log(clinetX(mousemove))
})