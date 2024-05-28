// *Botón hacia Arriba

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let ScrollValue = Math.round((pos * 100)/calcHeight);
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }
    else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;

    });
<<<<<<< HEAD
    // scrollProgress.style.background = `conic-gradient(#03cc65 ${ScrollValue}%, #d7d7d7 ${scrollValue}%)`;
=======
    scrollProgress.style.background = `conic-gradient(#03cc65 ${ScrollValue}%, #d7d7d7 ${scrollValue}%)`;
>>>>>>> c1a5fa667f9f41aa2b2151fbb08f727ff5d5cebd

};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// *FIN Botón hacia Arriba