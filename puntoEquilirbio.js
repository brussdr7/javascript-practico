class Producto {
    constructor({
        name,
        precio,
        costoVariable,
        costoFijo,
    }) {
        this.name = name;
        this.precio = precio;
        this.costoVariable = costoVariable;
        this.costoFijo = costoFijo;
    }
}

function createProduct() {
    const inputName = document.getElementById("inputName");
    const inputPrecio = document.getElementById("inputPrecio");
    const inputCostoV = document.getElementById("inputCostoV");
    const inputCostoF = document.getElementById("inputCostoF");

    const valueName = inputName.value;
    const valuePrecio = inputPrecio.value;
    const valueCostoV = inputCostoV.value;
    const valueCostoF = inputCostoF.value;

    const product = new Producto({
        name: valueName,
        precio: valuePrecio,
        costoVariable: valueCostoV,
        costoFijo: valueCostoF,
    });
    calcularPuntoEquilibrio(product);
}


function calcularPuntoEquilibrio(objeto) {
    resta = objeto.precio - objeto.costoVariable;
    const puntoEquilibrio = objeto.costoFijo / resta;
    const getResult = document.getElementById("resultP");
    getResult.innerText = "Las piezas que necesitas vender al mes para obtener tu punto de equilibrio son: "
    + puntoEquilibrio + " pz.";
}