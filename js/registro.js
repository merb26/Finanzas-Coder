const btnRegistrar = document.getElementById("btnRegistrar")

class usuarioStorage {
    constructor(obj) {
        this.nombre = obj.nombre
        this.email = obj.email
        this.pass = obj.pass
    }
}

class usuario {
    constructor(nombre, email, pass) {
        this.nombre = nombre
        this.email = email
        this.pass = pass
    }
}

const almacenamientoLocal = JSON.parse(localStorage.getItem("usuarios"))
const usuariosAlmacenados = []
if (almacenamientoLocal !== null) {
    // Si el localStorage solo tiene 1 registro, lo inserta al array
    if (almacenamientoLocal.length === 1) {
        usuariosAlmacenados.push(new usuarioStorage(almacenamientoLocal))
    } else {
        // el localStorage tiene más de un registro por lo tanto se usa for
        for (const iterator of almacenamientoLocal) {
            // Se inserta cada registro o dato al array
            usuariosAlmacenados.push(new usuarioStorage(iterator))
        }   
    }
}

btnRegistrar.onclick = () => {
    const nombreUsuario = document.getElementById("txtUsuario").value
    const email = document.getElementById("txtEmail").value
    const pass = document.getElementById("txtPassword").value
    const passConfirmado = document.getElementById("txtPassword2").value
    if (nombreUsuario !== "") {
        if (email !== "") {
            if (pass !== "") {
                if (passConfirmado !== "") {

                    //Si todos los campos no están vacíos

                    //Inserta el dato al array, que se registró el usuario
                    usuariosAlmacenados.push(new usuario(nombreUsuario.toUpperCase(), email.toUpperCase(), pass))
                    //Convierte el array al String dentro de la variable
                    const usuarioJSON = JSON.stringify(usuariosAlmacenados)
                    //Almacena en localStorage
                    localStorage.setItem("usuarios", usuarioJSON)
                    window.location.href = "../pages/consulta.html";
                } else {
                    alert("Debe confirmar la contraseña")
                }
            } else {
                alert("Debe ingresar la contraseña")
            }
        } else {
            alert("Debe ingresar email")
        }
    } else {
        alert("Debe ingresar nombre de usuario")
    }
}