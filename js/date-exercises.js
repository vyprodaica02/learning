//1: viết chương trình nhập vào năm sinh và in ra số tuổi
function getAge(year){
    if(typeof year !== "Number") {
        return 0;
    }
    else{
    const now = new Date();//lấy móc thời gian hiện tại dd/mm/yyyy
    const currentYear = now.getFullYear();// get full year 
    return currentYear - year;// lấy số  năm đã lấy trừu đi số năm nhập
}
} 
const yourAge = getAge('dấda');
// console.log(` số tuổi của bạn là ${yourAge}`);

//2: viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào
//ví dụ thời gian làm bài là 30p nếu chạy từ về 0 thì thông báo hết thời gian.
function countdown(minutes = 1){//tạo một biết
    let seconds = minutes * 60;//đổi từ minutes to seconds
    let current = 0;// đặt một biến đếm là current suất phát từ số 0
    const timer = setInterval(function(){//tạo hàm có chức năng setInterval
        current += 1;//cho biến current cứ mỗi seconds là thêm 1 đợn vị
        console.log(current);
        if(current === 10){//nếu current bằng điều kiện thì clear
            clearInterval(timer);//hàm clear interval
            console.log('your time is end');//in ra kết quả
        }
    },1000)//thời gian timing của hàm setInterval là 1second = 1000 minisecond
}
// countdown();//gọi hàm đẻ chạy
//3: viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với 
//thời gian hiện tại,ví dụ bạn dang chát vs 1 bạn a, sau đó bạn a offline và sau đó vài phút sau thì
// hiển thị bạn a vừa online  3p trước, 3 ngày trc ...
/* 
1 năm = 365d *24h *60p *60s=31536000s
1 tháng = 31d*24h*60p*60s= 2476800s
1 tuần = 7d*24h*60p*60s=604800s
1 ngày = 1d*24h*60p*60s=86400s
1 giờ = 24h*60p*60s=3600s
1 phut = 60s
*/
function timeSince(){
    const date = 'Tue Jan 11 2022 10:04:41 GMT+0700 (Giờ Đông Dương)';
    const now = new Date();
    const yourDate = new Date(date);
    const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
    console.log(seconds);
    let timer = seconds / 31536000;
    if(timer > 1){
        console.log(`online ${Math.floor(timer)} một năm trước`);
        return;
    }
    timer = seconds / 2476800;
    if(timer > 1){
        console.log(`online ${Math.floor(timer)} một tháng trước`);
        return;
    }
    timer = seconds / 604800;
    if(timer > 1){
        console.log(`online ${Math.floor(timer)} một tuần trước`);
        return;
    }
    timer = seconds / 86400;
    if(timer > 1){
        console.log(`online ${Math.floor(timer)} một ngày trước`);
        return;
    }
    timer = seconds / 3600;
    if(timer > 1){
        console.log(`online ${Math.floor(timer)} một giờ trước`);
        return;
    }
    timer = seconds / 60;
    if(timer > 1){
        console.log(`online ${Math.floor(timer)} một phút trước`);
        return;
    }
    timer = seconds;
    if(timer > 1){
        console.log(`online ${Math.floor(timer)} vài giây trước`);
        return;
    }
    if(timer < 0){
        console.log(`thời gian của bạn không tồn tại`)
    }
}
timeSince();
// function timeSince(date){//tạo hàm có tên là timeSinc
//     const now = new Date();//lấy thời gian của now
//     const yourDate = new Date(date);//thời gian lúc ofline
//     const seconds = Math.floor((now.getTime() - yourDate.getTime())/1000);//công thức tính thời gian là now - yourDate
//     // console.log(seconds);//in ra kết qua đã làm chòn và dc chuyển từ miniseconds thành seconds
//     let timer = seconds / 31536000;
//     if(timer > 1){
//         console.log(`${Math.floor(timer)} năm trc`);
//         return;
//     }
//     timer = seconds / 2476800
//     if(timer > 1){
//         console.log(`${Math.floor(timer)} tháng trc`);
//         return;
//     }
//     timer = seconds / 604800
//     if(timer > 1){
//         console.log(`${Math.floor(timer)} tuần trc`);
//         return;
//     }
//     timer = seconds / 86400
//     if(timer > 1){
//         console.log(`${Math.floor(timer)} ngày trc`);
//         return;
//     }
//     timer = seconds / 3600
//     if(timer > 1){
//         console.log(`${Math.floor(timer)} giờ trc`);
//         return;
//     }
//     timer = seconds / 60
//     if(timer > 1){
//         console.log(`${Math.floor(timer)} phút trc`);
//         return;
//     }
// }

// timeSince('Mon Jan 10 2022 18:16:07 GMT+0700 (Giờ Đông Dương)');//gọi hàm

