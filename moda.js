// const lista1 = [1, 2, 4, 2, 4, 2, 1, 3, 5, 3, 5, 2, 6, 2, 4, , 7];

function obtenerData() {
    const inputLista = document.getElementById("inputLista");
    const valueLista = inputLista.value;

    const array = Array.from(valueLista.split(","), Number);

    const moda = calcularModa(array);
    console.log(moda);

    const result = document.getElementById("resultP");
    result.innerText = "La moda es: " + moda[0] + " con " + moda[1] + " repeticiones";
}

function calcularModa(lista) {

    const listaCount = {};

    lista.map(function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    const listaArray = Object.entries(listaCount);

    listaArray.sort(function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    });

    const moda = listaArray[listaArray.length - 1];
    return moda;
}