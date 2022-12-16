var s=document.querySelector("#search");
var w=s.offsetWidth;
var ml=0;
var timer1,timer2;
s.onfocus=function(){
    //s获得对象时执行
    s.value=""
    clearInterval(timer2);
    timer1=setInterval(bc,1);

}
s.onblur=function(){
    if(s.value=="")
    {
        s.value="搜索感兴趣的课程"
        clearInterval(timer1);
        timer2=setInterval(bd,1);
    }
}
function bc()
{  if(w>250)
{
    clearInterval(timer1);
}
else{
    w=w+2;
    ml=ml-2;
    s.style.width=w+"px";
    s.style.marginLeft=ml+"px";
}
}

function bd()
{  if(w<=100)
{
    clearInterval(timer2);
}
else{
    w=w-1;
    ml=ml+1;
    s.style.width=w+"px";
    s.style.marginLeft=ml+"px";
}
}