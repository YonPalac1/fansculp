// *Carrousel Functions

// function App() { }

// window.onload = function (event) {
//     var app = new App();
//     window.app = app;
// }

// App.prototype.processingButton = function (event) {
//     const btn = event.currentTarget;
//     const carrouselList = event.currentTarget.parentNode;
//     const track = event.currentTarget.parentNode.querySelector('#track');
//     const carrousel = track.querySelectorAll('.carrousel-img');

//     const carrouselWidth = carrousel[0].offsetWidth;
//     const trackWidth = track.offsetWidth;
//     const listWidth = carrouselList.offsetWidth;

//     track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
//     btn.dataset.button == "button-prev" ? prevAction(leftPosition, carrouselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carrouselWidth, track);

// }

// let prevAction = (leftPosition, carrouselWidth, track) => {
//     if (leftPosition > 0) {
//         track.style.left = `${-1 * (leftPosition - carrouselWidth)}px`;
//     }
// }

// let nextAction = (leftPosition, trackWidth, listWidth, carrouselWidth, track) => {
//     if (leftPosition < (trackWidth - listWidth)) {
//         track.style.left = `${-1 * (leftPosition + carrouselWidth)}px`;
//     }
// }
// *FIN Carrousel Functions

const carrouselList = document.getElementById("carrousel-list")
const track = document.getElementById("track")
const carrousel = track.querySelectorAll('.carrousel-img');

const carrouselWidth = carrousel[0].offsetWidth;
const trackWidth = track.offsetWidth;
const listWidth = carrouselList.offsetWidth;

let leftPosition = 0
let timer = 5000

function moveCarousel(e) {
    timer = 8000
    let prevAction = (leftPosition, carrouselWidth, track) => {
        if (leftPosition > 0) {
            track.style.left = `${-1 * (leftPosition - carrouselWidth)}px`;
            leftPosition = leftPosition - carrouselWidth
        } else {
            leftPosition = carrouselWidth
        }
    }
    let nextAction = (leftPosition, trackWidth, listWidth, carrouselWidth, track) => {
        if (leftPosition < (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + carrouselWidth)}px`;
            leftPosition = leftPosition + carrouselWidth
        } else {
            leftPosition = 0;
        }
    }
    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    e.currentTarget.dataset.button == "button-prev" ? prevAction(leftPosition, carrouselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carrouselWidth, track);
}
setInterval(() => {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carrouselWidth)}px`;
        leftPosition = leftPosition + carrouselWidth
    } else {
        leftPosition = 0;
    }
}, [timer])


// *Navbar Functions

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// *FIN Navbar Functions

// funciones login y registro modales y menu

let menuOptions = document.querySelector(".options_box")
let form_login = document.querySelector("#form_login")
let form_register = document.querySelector("#form_register")
let modals = document.querySelector("#modals")

function openMenu() {
    menuOptions.classList.toggle("open")
}
function openLogin() {
    menuOptions.classList.remove("open")
    modals.classList.add("openModal")
    form_register.style.display = "none"
    form_login.style.display = "flex"
    nav.classList.remove("visible");
}
function openRegister() {
    menuOptions.classList.remove("open")
    modals.classList.add("openModal")
    form_login.style.display = "none"
    form_register.style.display = "flex"
    nav.classList.remove("visible");
}
function removeModals() {
    modals.classList.remove("openModal")
    nav.classList.remove("visible");
}



// ***Funciones de los Filtros*** //

// Traigo los elementos del DOM
const btns = document.querySelectorAll('.filters button');
const imgs = document.querySelectorAll('.card img');

// Agrego el click event a todos los botones

for (let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg);
}

// Set active button on click
function setActiveBtn(e) {
    //Quito la clase activa de los botones
    btns.forEach(btn => {
        btn.classList.remove('active-btn'); //Quita la Clase 'active-btn' a todos los botones
    });

    //Agrego la clase al boton que se le hizo click
    e.target.classList.add('active-btn');
}


//Filtro las imagenes
function filterImg(e) {
    //Corro la funcion activebtn
    setActiveBtn(e);

    //Recorro todas las imagenes
    imgs.forEach(img => {
        // Expando todas las imagenes
        img.classList.remove('img_shrink');
        img.classList.add('img_expand');

        // Traigo la data de los data-atributo

        //Traigo el numero de data-img
        const imgType = parseInt(img.dataset.img);

        //Traigo el numero de data-btn
        const btnType = parseInt(e.target.dataset.btn);

        /* 
        Si imgtype y btntype(donde se hizo click)
        son iguales...
        */

        if (imgType !== btnType) {
            // Escondo la imagen
            img.classList.remove('img_expand');
            img.classList.add('img_shrink');
        }
    });
}


// Establezco el evento al boton 'all'
btns[0].addEventListener('click', (e) => {
    // Corro la funcion de activebutton
    setActiveBtn(e);

    // Recorro todas las imagenes
    imgs.forEach(img => {
        // Expando todas las imagenes
        img.classList.remove('img_shrink');
        img.classList.add('img_expand');
    });
});


// Funciones de formularios
const comments = [{
    title: "Una buena experiencia",
    comment: "FANSCULP es sin duda el mejor lugar para llevar a cabo tus proyectos de diseño 3d. Desde el primer momento, el equipo me brindo una atención personalizada y profesional, asesoramiento en cada paso del proceso",
    autor: "Miguel"
}, {
    title: "Buena atencion",
    comment: "FANSCULP es sin duda el mejor lugar para llevar a cabo tus proyectos de diseño 3d. Desde el primer momento, el equipo me brindo una atención personalizada y profesional, asesoramiento en cada paso del proceso",
    autor: "Ariel"
}, {
    title: "Rapidisimo",
    comment: "FANSCULP es sin duda el mejor lugar para llevar a cabo tus proyectos de diseño 3d. Desde el primer momento, el equipo me brindo una atención personalizada y profesional, asesoramiento en cada paso del proceso",
    autor: "Marta"
},]
const container_comments = document.getElementById("container_comments")
const dots = document.getElementById("dots")
const dot = document.getElementsByClassName("dot")

let n_comment = 0;

for (let i = 0; i < comments.length; i++) {
    dots.innerHTML += `<button class="dot"></button>`
}

function changeDots(n_comment) {
    dot[n_comment].classList.add("active")
    if (n_comment === 0) {
        dot[1].classList.remove("active")
        dot[2].classList.remove("active")
    } else if (n_comment === 1) {
        dot[0].classList.remove("active")
        dot[2].classList.remove("active")
    } else if (n_comment === 2) {
        dot[0].classList.remove("active")
        dot[1].classList.remove("active")
    }
}

function changeComments(n_comment) {
    container_comments.innerHTML = `<div class="comment">
    <h4>${comments[n_comment].title}</h4>
    <p>${comments[n_comment].comment}</p>
    <span>${comments[n_comment].autor}</span>
    </div>`
    changeDots(n_comment)
}

for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", () => {
        changeComments(i)
        n_comment = i
    })
}

setInterval(() => {
    if (n_comment < comments.length) {
        changeComments(n_comment)
        n_comment = n_comment + 1
    } else {
        n_comment = 0
        changeComments(n_comment)
    }
}, [3000])


changeComments(n_comment)
