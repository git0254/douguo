var myvideo=document.getElementById("Video");
// var st = document.documentElement.scrollTop || document.body.scrollTop;
function playpause(){
    if(myvideo.paused)
        myvideo.play();
    else
        myvideo.pause();

}

function playpause2() {
        // 团训-不在类名为motto的元素的可视范围内，就停止播放视频
    var st = document.documentElement.scrollTop
    if(st!==0)/* 可写固定值，如1000 */{
        // clientHeight：元素的像素高度，包含元素的高度+内边距，不包含水平滚动条，边框和外边距。
        // offsetHeight：元素的像素高度 包含元素的垂直内边距和边框，水平滚动条的高度，且是一个整数。
        // scrollHeight：元素内容的高度，包括溢出的不可见内容。
        myvideo.pause();
        // 复杂的改变使用classList
    }
        //
        // if(window.scrollTop()>'.video'.offsetTop+'.video'.outerHeight()) {
        //     myvideo.pause();// 停止播放视频
        // }
        //

}
