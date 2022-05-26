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
            const {nombre, email, pass, nuevoUsuario, dinero} = iterator
            if ((txtUsuario === nombre || txtUsuario === email) && pass === passUsuario) {
                isFind = true
                if (nuevoUsuario) {
                    const almacenamientoLocalActualizado = almacenamientoLocal.map(p =>
                        p.nombre === nombre
                          ? { ...p, nuevoUsuario: false}
                          : p
                      );
                      localStorage.removeItem("usuarios")
                      localStorage.setItem("usuarios", JSON.stringify(almacenamientoLocalActualizado))
                }
                sessionStorage.setItem('usuario', nombre)
                sessionStorage.setItem('dineroDisponible', dinero)
                sessionStorage.setItem('nuevoUsuario', false)
                window.location.href = "../pages/resumen.html";
            }
        }
        !isFind && error()

    } else {
        error()
    }
}
