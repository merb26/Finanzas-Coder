const btnIniciar = document.getElementById("btnIniciar")

function error() {
    document.getElementById("error").innerHTML = `
                Los datos son incorrectos
                `
}

const linkLogotipo = document.getElementById("logotipo")
linkLogotipo.onclick = () => {
    window.location.href = "resumen.html";
}

// Para iniciar sesión

const almacenamientoLocal = JSON.parse(localStorage.getItem("usuarios")) || []

btnIniciar.onclick = () => {

    if (almacenamientoLocal !== null) {

        const txtUsuario = document.getElementById("txtUsuario").value.toUpperCase()
        const passUsuario = document.getElementById("txtPassword").value

        let isFind = false
        for (const iterator of almacenamientoLocal) {
            const {nombre, email, pass, dinero} = iterator
            if ((txtUsuario === nombre || txtUsuario === email) && pass === passUsuario) {
                isFind = true
                sessionStorage.setItem('usuario', nombre)
                alert("Dinero: " + dinero)
                sessionStorage.setItem('dineroDisponible', dinero)
                sessionStorage.setItem('nuevoUsuario', false)
                sessionStorage.setItem('muestraMensaje', true)
                window.location.href = "../pages/resumen.html";
                break;
            }
        }
        !isFind && error()

    } else {
        error()
    }
}
