document.addEventListener("DOMContentLoaded", function () {
    // Listen for the load event on the window object
    window.addEventListener("load", function () {
        const container_designs = document.getElementById("container_designs")
        const designs = [
            {
                id: 1,
                img: "./assets/images/todos_diseños/Tortuga00.webp",
                category: "anime",
                images: [""]
            },
            {
                id: 2,
                img: "./assets/images/todos_diseños/Tortuga01.webp",
                category: "personalizados",
                images: [""]
            },
            {
                id: 3,
                img: "./assets/images/todos_diseños/Tortuga02.webp",
                category: "series",
                images: [""]
            },
            {
                id: 4,
                img: "./assets/images/todos_diseños/Tortuga03.webp",
                category: "anime",
                images: [""]
            },
            {
                id: 5,
                img: "./assets/images/todos_diseños/Tortuga04.webp",
                category: "personalizados",
                images: [""]
            },
            {
                id: 6,
                img: "./assets/images/todos_diseños/Tortuga05.webp",
                category: "series",
                images: [""]
            },
            {
                id: 7,
                img: "./assets/images/todos_diseños/Tortuga06.webp",
                category: "series",
                images: [""]
            },
            {
                id: 8,
                img: "./assets/images/todos_diseños/Tortuga07.webp",
                category: "series",
                images: [""]
            },
            {
                id: 9,
                img: "./assets/images/todos_diseños/Tortuga08.webp",
                category: "series",
                images: [""]
            },
            {
                id: 10,
                img: "./assets/images/todos_diseños/Tortuga09.webp",
                category: "series",
                images: [""]
            },
        ]

        for (let i = 0; i < designs.length; i++) {
            container_designs.innerHTML += `<div class="card"><img src=${designs[i].img} alt=""></div>`
        }
    })
})
