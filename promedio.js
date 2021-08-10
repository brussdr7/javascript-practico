function calcularPromedio() {
    const inptLista = document.getElementById("inputLista");
    const valueLista = inptLista.value;

    const array = Array.from(valueLista.split(","), Number);
    console.log(array);

    const promedio = calcularMediaAritmetica(array);
    const parrafo = document.getElementById("resultP");
    parrafo.innerText = "El promedio es de: " + promedio;
}

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}