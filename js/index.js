var goBack = document.querySelector('.goBack');
var nav = document.querySelector('nav');
window.addEventListener('scroll',function(){
    if(window.pageYOffset >= nav.offsetTop + 300){
        goBack.style.display = 'block';
    }else{
        goBack.style.display = 'none';
    }
    goBack.addEventListener('click',function(){
        window.scroll(0,0);
    })
})