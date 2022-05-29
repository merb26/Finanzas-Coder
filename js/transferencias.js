const btnTransferir = document.getElementById("btnTransferir")

btnTransferir.onclick = () => {
    const txtCuentaDestino = document.getElementById("txtCuentaDestino").value
    const txtCantidad = document.getElementById("txtCantidad").value

    if (txtCuentaDestino.length === 12) {
        document.getElementById("error").innerHTML = ``
        const cantidadDisponible = sessionStorage.getItem("dineroDisponible")
        const total = cantidadDisponible - txtCantidad
        if (total >= 0) {
            if (txtCantidad.length !== 0) {
                const nombre = sessionStorage.getItem("usuario")
                document.getElementById("principal").innerHTML = ``
                document.getElementById("principal").innerHTML = `
                <h3 class="lblRecibo">Recibo de la operación</h3>
                
                <table>
                <tr>
                    <td>Estatus</td>
                    <td style="color: green">Operación Exitosa</td>
                </tr>
                <tr>
                    <td>Total a transferir</td>
                    <td>$${txtCantidad}</td>
                </tr>
                <tr>
                    <td>Desde la cuenta</td>
                    <td>********0000</td>
                </tr>
                <tr>
                    <td>Cuenta destino</td>
                    <td>${txtCuentaDestino}</td>
                </tr>
                <tr>
                    <td>Tipo de transferencia</td>
                    <td>SPEI</td>
                </tr>
                <tr>
                    <td>Referencia</td>
                    <td>xxxxxxxx</td>
                </tr>
                <tr>
                    <td>Descripción corta</td>
                    <td>Transferencia de ${nombre}</td>
                </tr>
                </table>
                <div class="boton form1">
                <a href="../pages/transferencias.html">Hacer otra transferencia</a>
                </div>
                `
                const usuarios = JSON.parse(localStorage.getItem("usuarios"))
                const nombreUsuario = sessionStorage.getItem("usuario")
                for (const iterator of usuarios) {
                    const {nombre} = iterator
                    if (nombre === nombreUsuario) {
                        const updatedOSArray = usuarios.map(p =>
                            p.nombre === nombreUsuario ?
                            {
                                ...p,
                                dinero: total
                            } :
                            p
                        );
                        sessionStorage.setItem("dineroDisponible", total)
                        localStorage.removeItem("usuarios")
                        localStorage.setItem("usuarios", JSON.stringify(updatedOSArray))
                        break;
                    }
                }
            } else {
                document.getElementById("error2").innerHTML = `
                Debe ingresar la cantidad
                `
            }
        } else {
            document.getElementById("error2").innerHTML = `
                Fondos insuficientes
                `
        }
    } else {
        document.getElementById("error").innerHTML = `
        Debe tener 12 dígitos
        `
    }
}