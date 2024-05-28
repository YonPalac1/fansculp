const TAIL_LENGTH = 20;

const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({x: 0, y: 0});

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div');
    div.classList.add('cursor-circle') ;
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
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
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;  
  }
  requestAnimationFrame(updateCursor)
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