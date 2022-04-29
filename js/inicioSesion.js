const btnIniciar = document.getElementById("btnIniciar")

class Usuario {
    constructor(obj) {
        this.nombre = obj.nombre
        this.email = obj.email
        this.pass = obj.pass
    }
}

// Obtiene los datos del localStorage, lo convierte al objeto y guarda en la variable
const almacenamientoLocal = JSON.parse(localStorage.getItem("usuarios"))

// Para comprobar si solo tiene un registro
let unRegistro = true

// SI el localStorage tiene más de un registro se cambia a falso
if (almacenamientoLocal !== 1) {
    unRegistro = false
}


btnIniciar.onclick = () => {

    // Si el almacenamiento es diferente del nulo
    if (almacenamientoLocal !== null) {

        // Guarda los datos por el usuario
        const txtUsuario = document.getElementById("txtUsuario").value.toUpperCase()
        const pass = document.getElementById("txtPassword").value

        // Si solo tiene un registro en el almacenamiento
        if (unRegistro === true) {
            const usuario = new Usuario(almacenamientoLocal)

            // Si compara el usuario que envio datos con el almacenamiento puede iniciar sesión
            if ((usuario.nombre === txtUsuario || usuario.email === txtUsuario) && usuario.pass === pass) {
                window.location.href = "../pages/consulta.html";
            } else {
                const error = document.getElementById("error")
                error.innerHTML = `
                Los datos son incorrectos
                `
            }
        } else {
            // Si no entonces tiene más de un registro


            let isFind = false
            // Validando el registro
            for (const iterator of almacenamientoLocal) {
                const usuario = new Usuario(iterator)
                if ((txtUsuario === usuario.nombre || txtUsuario === usuario.email) && pass === usuario.pass) {
                    isFind = true
                    break;
                }
            }
            
            if (isFind) {
                window.location.href = "../pages/consulta.html";
            } else {
                const error = document.getElementById("error")
                error.innerHTML = `
                Los datos son incorrectos
                `
            }
        }

    } else {
        const error = document.getElementById("error")
        error.innerHTML = `
            Los datos son incorrectos
            `
    }
}