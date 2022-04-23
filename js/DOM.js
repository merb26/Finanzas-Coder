const interesAnual = .30;
function totalInteres(dineroPedido) {
    return dineroPedido * interesAnual;
}

function totalPrestamo(dineroPedido) {
    return dineroPedido + totalInteres(dineroPedido);
}

function pagoMensual(pagoPorPeriodo, dineroPedido) {
    return Math.round(totalPrestamo(dineroPedido) / pagoPorPeriodo);
}

const txtDineroPedido = document.getElementById("dineroPedido");
txtDineroPedido.addEventListener("keypress", function onEvent(event){
    if(event.key === "Enter"){
        document.getElementById("numeroMeses").focus()
    }
})

const txtNumeroMeses = document.getElementById("numeroMeses");
txtNumeroMeses.addEventListener("keypress", function onEvent(event){
    if(event.key === "Enter"){
        document.getElementById("enviar").click()
    }
})

const btnEnviar = document.getElementById("enviar")
btnEnviar.onclick = () => {
    const dineroPedido = parseFloat(document.getElementById("dineroPedido").value) 
    if (dineroPedido >= 5000 && dineroPedido <= 150000) {
        const pagoPorPeriodo = parseInt(document.getElementById("numeroMeses").value) 
        if (pagoPorPeriodo >= 6 && pagoPorPeriodo <= 36) {
            const div = document.getElementById("resultado")
            div.innerHTML = `
            <br><br>
            <h4>Dinero Prestado: $${dineroPedido}</h4>
            <h4>Total de meses para pagar: ${pagoPorPeriodo}</h4>
            <br>
            <hr>
            <br>
            <h4>Tasa de interés(30%): $${totalInteres(dineroPedido)}</h4>
            <h4>Total a pagar: $${totalPrestamo(dineroPedido)}</h4>
            <h4>Pago mensual: $${pagoMensual(pagoPorPeriodo, dineroPedido)}</h4>
            `

        } else {
            const error = document.getElementById("resultado")
            error.innerHTML = `
            <br><br>
            <h5 style="color: red">Intente de nuevo, ingrese de 6 a 36 meses</h5>
            `
        }
    } else {
        const error = document.getElementById("resultado")
        error.innerHTML = `
        <br><br>
        <h5 style="color: red">Intente de nuevo, ingrese el monto que quieres pedir de $5,000 hasta $150,000</h5>
        `
    }
}

