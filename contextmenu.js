const contextmnue = document.querySelector(".container");
const social = document.querySelector(".social-media");

window.addEventListener("contextmenu" , function(e){
    e.preventDefault();
    let x = e.offsetX;
    let y = e.offsetY;
    let winwidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let cmwidth = 300
    let cmheight =262;

    x = x > winwidth - cmwidth ? winwidth-cmwidth : x;
    y = y > winHeight - cmheight ? winHeight-cmheight : y;
    if (x > (winwidth - cmwidth- 150)){
        social.style.left=`${-160}px`;
    }
    else{
        social.style.left=`${270}px`;
    }
    contextmnue.style.left=`${x}px`;
    contextmnue.style.top=`${y}px`;
    contextmnue.style.visibility="visible";
})

document.addEventListener("click" , function (e) {
    if (e.target == this.body){
        contextmnue.style.visibility="hidden";
    }
})
 
