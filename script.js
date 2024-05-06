
// getElementById tomar elemento por id
    let buttonOpenMenu = document.getElementById("button-open-menu")
    let backdrop = document.getElementById("backdrop")
    let menuLogin = document.getElementById("menu-login")
    let loginIcon = document.getElementById("login-icon")
    let menuBox = document.getElementById("menu-box")

    // le agrego un evento de escucha al hacer click para que ejecute toggleMenu
    buttonOpenMenu.addEventListener("click", toggleMenu)
    backdrop.addEventListener("click", toggleMenu)

    loginIcon.addEventListener("click", toggleSesion)

    function toggleMenu() {
        // toggle agrega y quita la clase
        menuLogin.classList.toggle("open")
        backdrop.classList.toggle("close")
        menuBox.classList.toggle("open")
        
        // le agrego la clase open al componente que tiene el id menu-login
        // if (menuLogin.style.left === "-100%") {
        //     menuLogin.style.left = 0
        // } else {
        //     menuLogin.style.left = "-100%"
        // }
    }

    function toggleSesion() {
        menuBox.classList.toggle("open")
        backdrop.classList.toggle("close")
    }
