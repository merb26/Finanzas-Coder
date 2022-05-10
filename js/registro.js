

Swal.fire({
    position: 'top-end',
    title: 'Te regalo $10,000 por ser mi cliente nuevo',
    showConfirmButton: false,
    timer: 3000
  })

const btnRegistrar = document.getElementById("btnRegistrar")

function error(mensaje) {
    document.getElementById("error").innerHTML = mensaje
}

const linkLogotipo = document.getElementById("logotipo")
linkLogotipo.onclick = () => {
    window.location.href = "../index.html";
}

const usuariosAlmacenados = JSON.parse(localStorage.getItem("usuarios")) || []

btnRegistrar.onclick = () => {
    const nombreUsuario = document.getElementById("txtUsuario").value.toUpperCase()
    const emailUsuario = document.getElementById("txtEmail").value.toUpperCase()
    const passUsuario = document.getElementById("txtPassword").value
    const passConfirmadoUsuario = document.getElementById("txtPassword2").value

    if (nombreUsuario !== "") {
        let seRepite = false
        for (const iterator of usuariosAlmacenados) {
            const {nombre} = iterator
            if (nombre === nombreUsuario) {
                seRepite = true
                break;
            }
        }
        if (emailUsuario !== "" && seRepite === false) {
            seRepite = false
            for (const iterator of usuariosAlmacenados) {
                const {email} = iterator
                if (email === emailUsuario) {
                    seRepite = true
                    break;
                }
            }
            if (passUsuario !== "" && seRepite === false) {
                if (passConfirmadoUsuario !== "") {
                    //Si todos los campos no están vacíos
                    if (passUsuario === passConfirmadoUsuario) {
                        //Inserta el dato al objeto, que se registró el usuario
                        usuariosAlmacenados.push({nombre: nombreUsuario, email: emailUsuario, pass: passUsuario})
                        localStorage.setItem("usuarios", JSON.stringify(usuariosAlmacenados))
                        window.location.href = "../pages/resumen.html";
                    } else {
                        error("Las contraseñas no coinciden")
                    }
                } else {
                    error("Debe confirmar la contraseña")
                }
            } else {
                seRepite === true ? error("El correo electrónico ya fue registrado") : error("Debe ingresar la contraseña")
            }
        } else {
            seRepite === true ? error("El nombre de usuario ya existe") : error("Debe ingresar email")
        }
    } else {
        error("Debe ingresar el nombre de usuario")
    }
}

