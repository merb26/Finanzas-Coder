
const btnIniciar = document.getElementById("btnIniciar")

btnIniciar.onclick = () => {
    const usuario = document.getElementById("txtUsuario").value
    const pass = document.getElementById("txtPassword").value
    if(usuario === "admin" && pass === "1234"){
        window.location.href = "pages/dashboard.html";
    } else {
        const error = document.getElementById("error")
        error.innerHTML = `
        Los datos son incorrectos
        `
    }
}