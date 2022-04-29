


function creatNotification(title = 'Welcome to notification'){
    const template = ` <div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
        Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
        dolor sit amet consec
        </p>
    </div>
    </div>`
    document.body.insertAdjacentHTML('beforebegin',template);
}

const randomData = ['welcome to javascript course','welcome to this tutorial','today is a good day','my name is Điếu','i am froned developer'];
let lastTime;
const timer = setInterval(()=>{
    const item = document.querySelector(".noti");
    if(item) item.parentNode.removeChild(item);
    const title = randomData[Math.floor(Math.random() * randomData.length)]
    if(lastTime !== title){

        creatNotification(title)
    }
    lastTime = title
},5000)