const listaCompras = [
    { precio: 3, cantidad: 3 },
    { precio: 9, cantidad: 2 },
    { precio: 7, cantidad: 1 },
];

// function calcularPromedioPonderado(lista) {
//     let sumaLista = 0;
//     for(let i = 0; i < lista.length; i++) {
//         sumaLista += lista[i].precio * lista[i].cantidad;
//     }
//     return sumaLista / lista.length;
// }

const multiplicacion = listaCompras.map(function(elementoLista) {
    return elementoLista.precio * elementoLista.cantidad;
});

const suma = multiplicacion.reduce(function(acumulado = 0, valorActual) {
    return acumulado + valorActual;
});

const cantidad = listaCompras.map(function(elementoLista) {
    return elementoLista.cantidad;
});

const sumaCantidad = cantidad.reduce(function(acumulado = 0, valorActual) {
    return acumulado + valorActual;
});

const promedioPonderado = suma / sumaCantidad;
console.log(promedioPonderado);