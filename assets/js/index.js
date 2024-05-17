// *Header Functions
const TAIL_LENGTH = 20;

const cursor = document.getElementById('cursor');
let mouseX = 0;
let mouseY = 0;
let hue = 0;
let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

let letters = document.getElementsByClassName("letter")
let rgb = [
    [255, 255, 255],
    [146, 2, 218],
    [18, 2, 218],
    [2, 117, 218],
    [94, 60, 144],
    [61, 60, 144],
    [144, 60, 115],
    [60, 141, 144],
]
let stylebg = rgb[0];

// funciones para el cursor punteado
function onMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function initCursor() {
    for (let i = 0; i < TAIL_LENGTH; i++) {
        let div = document.createElement('div');
        div.classList.add('cursor-circle');
        cursor.append(div);
    }
    cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

const getRandomInt = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
}

function updateCursor() {
    cursorHistory.shift();
    cursorHistory.push({ x: mouseX, y: mouseY });

    for (let i = 0; i < TAIL_LENGTH; i++) {
        let current = cursorHistory[i];
        let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        let xDiff = next.x - current.x;
        let yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
        cursorCircles[i].style.background = "rgba("+ stylebg[0]+","+ stylebg[1]+","+ stylebg[2]+",1)";
    }
    requestAnimationFrame(updateCursor)
}

// hover sobre las letras de manera random
for (let l of letters) {
    l.addEventListener("mouseover", () => {
        stylebg = rgb[getRandomInt(0, rgb.length - 1)]
        l.style.color = "rgba("+ stylebg[0]+","+ stylebg[1]+","+ stylebg[2]+", 1)"; 
    })
    l.addEventListener("mouseout", () => {
        l.style.color = "white"
        stylebg = rgb[0]
    })
}


document.addEventListener('mousemove', onMouseMove, false);

initCursor();
updateCursor();

// funciones hover para que aparezcan las imagenes en el header
let image_example = document.getElementById("image_example") 
let images = ["../assets/images/carrousel/Funko_a01.jpg", 
"../assets/images/carrousel/Funko_a02.jpg",
"../assets/images/carrousel/Funko_a03.jpg",
"../assets/images/carrousel/Funko_a04.jpg",
"../assets/images/carrousel/Funko_a05.jpg",
]

let imgElement = document.createElement("img")
let index = 0;

function mouseOver() {
    image_example.classList.add("onmouse")
    imgElement.setAttribute("src", images[index])
    image_example.appendChild(imgElement)
}
function mouseOut() {
    index++
    image_example.classList.remove("onmouse")

    if (index >= images.length) {
        index = 0;
    }
}
function trackMouse(e) {
    document.documentElement.style.setProperty(
        "--cursorXPos",
        `${e.clientX}px`
    )
    document.documentElement.style.setProperty(
        "--cursorYPos",
        `${e.clientY}px`
    )
}
document.addEventListener("mousemove", trackMouse)

//****************************************************************************************************/

// *Carrousel Functions
function App() {}

    window.onload = function(event) {
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const carrouselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrousel = track.querySelectorAll('.carrousel-img');

        const carrouselWidth = carrousel[0].offsetWidth;

        const trackWidth = track.offsetWidth;
        const listWidth = carrouselList.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carrouselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carrouselWidth, track);

    }

    let prevAction = (leftPosition, carrouselWidth, track) => {
        if (leftPosition > 0) {
            track.style.left = `${-1 * (leftPosition - carrouselWidth)}px`;
        }
    }

    let nextAction = (leftPosition, trackWidth, listWidth, carrouselWidth, track) => {
        if (leftPosition <  (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + carrouselWidth)}px`;
        }
    }
