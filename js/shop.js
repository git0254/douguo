var header=document.getElementById('header');
window.onscroll = function(){
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(st);
    if(st > header.offsetHeight)/* 可写固定值，如1000 */{
        // clientHeight：元素的像素高度，包含元素的高度+内边距，不包含水平滚动条，边框和外边距。
        // offsetHeight：元素的像素高度 包含元素的垂直内边距和边框，水平滚动条的高度，且是一个整数。
        // scrollHeight：元素内容的高度，包括溢出的不可见内容。
        header.style.position = "fixed";
        header.offsetWidth=100%;
        // 复杂的改变使用classList
    }
    else{
        header.style.position = "static";
    }
}