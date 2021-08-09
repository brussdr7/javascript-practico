function calcularTodo() {
    const listaIngresos = document.getElementById("inputIngresos");
    const valueIngresos = listaIngresos.value;
    const listaGastos = document.getElementById("inputGastos");
    const valueGastos = listaGastos.value;

    let ingresos = Array.from(valueIngresos.split(","), Number);
    let gastos = Array.from(valueGastos.split(","), Number);

    const ahorro = calcularAhorro(ingresos, gastos);
    const capEndeuda = calcularCapEndeuda(ingresos, gastos);
    const montEndeuda = calcularMontEndeuda(ingresos, gastos);

    console.log("tu ahorro es: $" + ahorro);
    console.log(
        "tu capacidad de endeudamiento es: "
        + parseInt(capEndeuda)
        + "%"
    );
    console.log(
        "tu monto de endeudamiento es: $"
        + parseInt(montEndeuda)
    );
}

// Capacidad de Ahorro
function calcularAhorro(ingresos, gastos) {

    const totalIngresos = ingresos.reduce(function (acumulado = 0, valornuevo) {
        return acumulado + valornuevo;
    });
    const gastoTotal = gastos.reduce(function (acumulado = 0, valornuevo) {
        return acumulado + valornuevo;
    });
    const ahorro = totalIngresos - gastoTotal;
    return ahorro;
}

// Capacidad de Endeudamiento
function calcularCapEndeuda(ingresos, gastos) {

    const totalIngresos = ingresos.reduce(function (acumulado = 0, valornuevo) {
        return acumulado + valornuevo;
    });
    const gastoTotal = gastos.reduce(function (acumulado = 0, valornuevo) {
        return acumulado + valornuevo;
    });
    const capacidadEndeudamiento = (gastoTotal / totalIngresos) * 100;
    return capacidadEndeudamiento;
}

function calcularMontEndeuda(ingresos, gastos) {

    const ahorro = calcularAhorro(ingresos, gastos);
    const capacidadEndeudamiento = calcularCapEndeuda(ingresos, gastos);

    const montoEndeudamiento = ahorro * capacidadEndeudamiento;
    return montoEndeudamiento;
}

// Calculo impuesto sobre la renta
const array = [3,6,9,12,15,18,21];


const value = array.map(function(numero) {
    const valor = 14;
    if(numero > valor) {
        
    }
});

const intervalo = array.find(function(number) {
    const valor = 14;
    if(valor < number) {
        return number -1;
    }
});

console.log(intervalo);

const result = array.filter(function(number) {
    const valor = 14;
    return number < valor;
});

console.log(result);

for(let i = 0; i < array.length; i++) {
    if(array[i] < 10) {
        console.log(array[i]);
    }
}

const removed = array.splice();
