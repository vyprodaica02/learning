const counterIncrease = document.querySelector(".counter-increase")
const counterDescrease = document.querySelector(".counter-descrease")
const counterNumber = document.querySelector(".counter-number")

let couterValue = parseInt(counterNumber.textContent);
counterIncrease.addEventListener('click', ()=>{
    couterValue += 1;
    counterNumber.textContent = couterValue;
})

counterDescrease.addEventListener('click',()=>{
    if(couterValue <= 0) return;
    couterValue -= 1;
    counterNumber.textContent = couterValue;
})

