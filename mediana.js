function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

function calcularMediana(lista) {

    const inputLista = document.getElementById("inputLista");
    const listaValue = inputLista.value;

    let nuevaArray = Array.from(listaValue.split(","), Number);

    const listaNumeros = nuevaArray.sort();
    console.log(listaNumeros);

    const mitadLista = parseInt(listaNumeros.length / 2);
    
    let mediana;

    if (esPar(listaNumeros.length)) {
        const elemento1 = listaNumeros[mitadLista - 1];
        const elemento2 = listaNumeros[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
        ]);
        mediana = promedioElemento1y2;
        const getParrafo = document.getElementById("resultP");
        getParrafo.innerText = "La mediana de tu lista es: " + mediana;
        console.log(mediana);
    } else {
        mediana = listaNumeros[mitadLista];
        const getParrafo = document.getElementById("resultP");
        getParrafo.innerText = "La mediana de tu lista es: " + mediana;
        console.log(mediana);
    }
}

