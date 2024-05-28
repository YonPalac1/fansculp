// *Validación de formulario
const validarFormulario = (idFormulario) => {
    const listaCampos = document.querySelectorAll(`#${idFormulario} [data-validate]`);
    let validacion = true;
    console.log('listaCampos :>> ', listaCampos);
    if (listaCampos.length > 0) {
        listaCampos.forEach(elemento => {
            const tipoElemento = elemento.getAttribute("type");
            console.log('tipoElemento :>> ', tipoElemento);
            if (elemento.value === "") {
                validacion = false;
                elemento.style.setProperty("border", "1 px solid red");
                setTimeout(() => {
                    elemento.style.setProperty("border", "");
                }, 2000);
            }
            if (tipoElemento === "checkbox" && !elemento.checked) {
                validacion = false;
                elemento.style.setProperty("border", "1 px solid red");
                setTimeout(() => {
                    elemento.style.setProperty("border", "");
                }, 2000);
<<<<<<< HEAD
            }}
        )
=======
            })
>>>>>>> c1a5fa667f9f41aa2b2151fbb08f727ff5d5cebd
    }
}

const enviarFormulario = () => {
    event.preventDefault();
    validarFormulario('form-validation');
}
// *FIN Validación de formulario