document.addEventListener("DOMContentLoaded", function () {
    // Listen for the load event on the window object
    window.addEventListener("load", function () {
        const preloader = document.getElementById("preloader");

        setTimeout(() => {
            preloader.style.top = "-100vh";
            window.scrollTo(0, 0);
            setTimeout(() => {
                preloader.style.display = "none"
            }, 2000)
        }, 2000)
        const worlds = ["0", "10", "45", "50", "60", "75", "100"]
        let index = 0

        const showText = () => {
            if (index >= worlds.length) {
                index = 0
            }
            text.textContent = worlds[index]
            index++
            setTimeout(showText, 400)
        }
        showText()
    })
})
