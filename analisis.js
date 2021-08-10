// funciones Helpers
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function(acumulado = 0, valorActual) {
        return acumulado + valorActual;
    });
    return sumaLista / lista.length;
}

function esPar(lista) {
    return (lista.length % 2 === 0);
}

// Calculadora de Mediana

function calcularMedianaSalarios(lista) {
    const mitadLista = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const mediana1 = lista[mitadLista - 1];
        const mediana2 = lista[mitadLista];
        const promedioMediana = calcularMediaAritmetica(mediana1, mediana2);
        return promedioMediana;
    } else {
        return lista[mitadLista];
    }
}

// Mediana General

const listaSalarios = colombia.map(function (lista) {
    return lista.salary;
});

const ListaOrdenadaSalarios = listaSalarios.sort(function(acumulado, valorActual) {
    return acumulado - valorActual;
});

const medianaGeneralCol = calcularMedianaSalarios(ListaOrdenadaSalarios);

// Mdiana top 10 Col

const spliceStart = (ListaOrdenadaSalarios.length * 90) /100
const spliceEnd = ListaOrdenadaSalarios.length - spliceStart;

const spliceTop10Col = ListaOrdenadaSalarios.splice(
    spliceStart,
    spliceEnd,
);

const medianaTop10Col = calcularMediaAritmetica(spliceTop10Col);

const parrafo1 = document.getElementById("resultGen");
parrafo1.innerText = "El promedio del sueldo en Colombia es de: " + medianaGeneralCol;
const parrafo2 = document.getElementById("resultTop");
parrafo2.innerText = "El promedio del top 10 del sueldo en Colombia es de: " + medianaTop10Col;