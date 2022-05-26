const nuevoUsuario = sessionStorage.getItem("nuevoUsuario")
if (nuevoUsuario === "false") {
    Swal.fire({
        icon: 'warning',
        title: 'Cuidamos tu seguridad',
        text: 'Si recibes una llamada, correo electrónico o sms donde te pidan tu token móvil, código de verificación o contraseña. ¡ES FRAUDE!'
      })
} else {
    Swal.fire({
        text: 'Por ser mi nuevo cliente te regalamos $10000'
      })
}

const usuario = sessionStorage.getItem("usuario")
const hola = document.querySelector('#hola')
const html = `
    <h1>Hola ${usuario}</h1>
`
hola.innerHTML = html

const dineroStorage = sessionStorage.getItem("dineroDisponible")
const dineroDisponible = document.querySelector('#dineroDisponible')
const html2 = `
    <h3>Mi dinero disponible <div class="lblDinero">$${dineroStorage}</div></h3>
`
dineroDisponible.innerHTML = html2

