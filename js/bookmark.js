var tab = document.querySelector(".tab");//找到第一个.tab
// var tab = document.getElementsByClassName()[0]找第一个
var tt = tab.getElementsByClassName("tt")[0];
var span = tt.querySelectorAll("span");
// var span = tt.getElementsByTagName()
var tc = tab.querySelectorAll(".tc");
// console.log(tab,tt,span,tc);
for(var i=0; i<span.length; i++){
    span[i].index = i;
    //根据span循环
    span[i].onmouseover = function(){
        //当鼠标放上去
        // 不能使用i，使用this
        // 所有的span都去除cur类，所有的tc都隐藏
        for(var j=0; j<span.length; j++){
            span[j].classList.remove("cur");/* 所有的span都去除cur类 */
            tc[j].style.display = "none";/* 所有的tc都隐藏 */
        }
        this.classList.add("cur");
        //增加一个cur类
        tc[this.index].style.display = "block";
    }
}


// json
// function initBrowseData() {
//     let dataArea = document.getElementById("browse");
//     ajaxGet("./json/bookmark.json", null, true, function (json) {
//         let content = "";
//         for (var i = 0; i < json.length; i++) {
//             let name = json[i].name;
//             let imgUrl = json[i].img;
//             content += `<div class="item">
//                     <div class="img" style="background-image: url(${imgUrl});" ></div>
//                         <div class="footerText">${name}</div>
//                 </div>`;
//         }
//         dataArea.innerHTML = content;
//     });
// }
//
// initBrowseData();