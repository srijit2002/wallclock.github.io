const second=document.getElementById("second");
const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const scrollBar=document.querySelector(".scrollThumb");
let hours=0.0008;
let seconds=6;
let minutes=0.1;
let currentDate= new Date();
let currentHour=currentDate.getHours();
let currentMinute=currentDate.getMinutes();
let currentSecond=currentDate.getSeconds();
if(currentHour>12){
    currentHour=currentHour-12;
}



setInterval(() => {
    hour.style.transform=`rotate(${(-90)+(currentHour*30)+(currentMinute/2)+hours}deg)`;
    hours=hours+0.0008;
    minute.style.transform=`rotate(${(-90)+(currentMinute*6)+minutes}deg)`;
    minutes=minutes+0.1;
    second.style.transform=`rotate(${(-90)+(currentSecond*6)+seconds}deg)`;
    seconds=seconds+6;
}, 1000);

let totalheight=document.body.scrollHeight-window.innerHeight;
window.addEventListener("scroll",()=>{
   
    let scrollHeight=(window.pageYOffset/totalheight)*100;
    scrollBar.style.height=scrollHeight+"%";
})