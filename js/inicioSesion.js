const btnIniciar = document.getElementById("btnIniciar")

function error() {
    document.getElementById("error").innerHTML = `
                Los datos son incorrectos
                `
}

const linkLogotipo = document.getElementById("logotipo")
linkLogotipo.onclick = () => {
    window.location.href = "../index.html";
}

// Obtiene los datos del localStorage, lo convierte al objeto y guarda en la variable
const almacenamientoLocal = JSON.parse(localStorage.getItem("usuarios"))

btnIniciar.onclick = () => {

    // Si el almacenamiento es diferente del nulo
    if (almacenamientoLocal !== null) {

        // Guarda los datos por el usuario
        const txtUsuario = document.getElementById("txtUsuario").value.toUpperCase()
        const passUsuario = document.getElementById("txtPassword").value

        let isFind = false
        // Validando el registro
        for (const iterator of almacenamientoLocal) {
            const {nombre, email, pass} = iterator
            if ((txtUsuario === nombre || txtUsuario === email) && pass === passUsuario) {
                isFind = true
                window.location.href = "../pages/resumen.html";
                break;
            }
        }
        !isFind && error()

    } else {
        error()
    }
}