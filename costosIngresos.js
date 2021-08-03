const vela = {
    precio: 10,
    costoVariable: 5,
    costoFijo: 1000,
};

const ingresos = [
    100,
    200,
    50,
    1000,
    200,
    5,
    2,
    20,
    100,
    200
];

const gastos = [
    100,
    20,
    25,
    10,
    10,
    5,
    20,
    20,
    50,
    25,
    100,
    30,
    100,
    25,
    23,
    5,
    200,
];

// Capacidad de Ahorro
function obtenerIngresos() {
    const listaIngresos = document.getElementById("inputIngresos");
    const valueIngresos = listaIngresos.value;

    let ingresos = Array.from(valueIngresos.split(","), Number);
    return ingresos;
}

function obtenerGastos() {
    const listaGastos = document.getElementById("inputGastos");
    const valueGastos = listaGastos.value;

    let gastos = Array.from(valueGastos.split(","), Number);
    return gastos;
}

function calcularAhorro() {
    const totalIngresos = ingresos.reduce(function (acumulado = 0, valornuevo) {
        return acumulado + valornuevo;
    });
    const gastoTotal = gastos.reduce(function (acumulado = 0, valornuevo) {
        return acumulado + valornuevo;
    });
    const ahorro = totalIngresos - gastoTotal;
    console.log(ahorro);
}






// // Capacidad de Endeudamiento
// const capacidadEndeudamiento = (gastoTotal / totalIngresos) * 100
// console.log(
//     "Capacidad Endeudamiento: "
//     + parseInt(capacidadEndeudamiento)
//     + "%"
// );

// const montoEndeudamiento = ahorro * capacidadEndeudamiento;
// console.log(
//     "Monto endeudamiento: $"
//     + parseInt(montoEndeudamiento)
// );

function calcularPuntoEquilibrio(objeto) {
    resta = objeto.precio - objeto.costoVariable;
    const puntoEquilibrio = objeto.costoFijo / resta;
    return console.log(puntoEquilibrio);
}

