
class movimiento {
    constructor(montoAgredado, tipoMovimiento) {
        this.montoAgregado = montoAgredado;
        this.tipoMovimiento = tipoMovimiento;
    }
}

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

// while (true) {

//     const nombre = prompt("Hola! Cuál es tu nombre?");
//     const movimientos = [];
//     let monto = 1500;
//     let cantidad = 0;

//     if (nombre != "" && nombre != null) {

//         while (true) {
//             const opcion = prompt("Finanzas Coder"
//              + " \nBienvenido a tu cuenta " + nombre + " :) !!!"
//             + "\n\nTienes $" + monto
//             + " \n[1] Depositar" 
//             + " \n[2] Retirar"
//             + " \n[3] Transferencia" 
//             + " \n[4] Listar movimientos" 
//             + " \n[5] Simulador de préstamo" 
//             + " \n[6] Salir" 
//             + " \n\nEscoge una opción que desea realizar: ");
//             if (opcion === "1") {
//                 cantidad = parseInt(prompt("Ingrese el monto para depositar: "));
//                 movimientos.push(new movimiento(cantidad, "Depósito"));
//                 monto += cantidad;
//                 alert("Ha depositado con éxito");
//             } else if (opcion === "2") {
//                 cantidad = parseInt(prompt("Ingrese el monto para retirar: "));
//                 monto -= cantidad;
//                 if(monto >= 0){
//                     movimientos.push(new movimiento(cantidad, "Retiro"));
//                     alert("Ha retirado con éxito");
//                 } else {
//                     alert("Saldo insuficiente");
//                     monto += cantidad;
//                 }
//             } else if (opcion === "3") {
//                 cantidad = parseInt(prompt("Ingrese el monto para transferir: "));
//                 monto -= cantidad;
//                 if(monto >= 0){
//                     movimientos.push(new movimiento(cantidad, "Transferencia"));
//                     alert("Se ha transferido con éxito");
//                 } else {
//                     alert("Saldo insuficiente");
//                     monto += cantidad;
//                 }
//             } else if (opcion === "4") {
//                 for (const movimiento of movimientos) {
//                     alert("Monto: " + movimiento.montoAgregado + "  Tipo de movimiento: " + movimiento.tipoMovimiento);
//                 }
//             } else if (opcion === "5") {
//                 const dineroPedido = parseFloat(prompt("¿Cuánto dinero quieres pedir? Desde $5,000 hasta $150,000"));
//                 if (dineroPedido >= 5000 && dineroPedido <= 150000) {
//                     const pagoPorPeriodo = parseInt(prompt("¿Cuánto quieres pagar cada mes? De 6 meses a 36 meses"));
//                     if (pagoPorPeriodo >= 6 && pagoPorPeriodo <= 36) {
//                         alert("Dinero prestado: " + dineroPedido + "  Tasa de interés(30%): " + totalInteres(dineroPedido) +
//                             "  Total a pagar: " + totalPrestamo(dineroPedido) + "  Pago mensual: " + pagoMensual(pagoPorPeriodo, dineroPedido));

//                     } else {
//                         alert("Intente de nuevo, ingrese de 6 a 36 meses");
//                     }
//                 } else {
//                     alert("Intente de nuevo, ingrese el monto que quieres pedir de $5,000 hasta $150,000");
//                 }
//             } else if (opcion === "6") {
//                 break;
//             } else {
//                 alert("Error al seleccionar la opción, intente de nuevo");
//             }
//         }

//     } else {

//         alert("Favor de ingresar tu nombre, intente de nuevo");

//     }

// }

