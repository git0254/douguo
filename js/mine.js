var ad=document.getElementById("ad");
var timer;
var gao=ad.offsetHeight;//ad的高度
// console.log(gao);
//settimeout定时器
window.setTimeout(function(){timer=setInterval(dh,1);},2000);
//不停地调用dh函数，5ms
function dh()
{ad.style.height=gao--+"px";}
// {if(true)
//     ad.style.height=gao--+"px";
// else
//     clearInterval(timer);
// //取消由 setInterval() 函数设定的定时执行操作
// }