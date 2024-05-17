var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  autoplay: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});


// register login functions
let forms = document.getElementById("forms")
let backdrop = document.getElementById("backdrop")
let login = document.getElementById("login")
let register = document.getElementById("register")
let button_register = document.getElementById("button_register")
let button_login = document.getElementById("button_login")

button_register.addEventListener("click", () => {
  login.style.display = "none"
  register.style.display = "flex"
})
button_login.addEventListener("click", () => {
  register.style.display = "none"
  login.style.display = "flex"
})
backdrop.addEventListener("click", () => {
  forms.style.display = "none"
})