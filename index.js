const open = document.getElementById("open");
open.addEventListener("click", () =>{
    open.className = "close";
    document.getElementById("close").className = "open";
    document.getElementById("pop-up").style.scale= 1;
    document.getElementById("pop-up").style.right = '10px';
})
const close = document.getElementById("close");
close.addEventListener("click", () =>{
    close.className = "close";
    document.getElementById("open").className = "open";
    document.getElementById("pop-up").style.scale = 0;
    document.getElementById("pop-up").style.right = '-1000px';
})
/*open.onlick = () => {
    console.log("open");
}*/
