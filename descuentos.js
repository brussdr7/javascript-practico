// const precioOriginal = 100;
// const descuento = 15;

const cupons = [
    {
        name: "pambolero",
        descuento: 15,
    },
    {
        name: "byker",
        descuento: 30,
    },
    {
        name: "olimpico",
        descuento: 40,
    },
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;


    const isCuponValueValid = (cupon) => cupon.name === cuponValue;

    const userCupon = cupons.find(isCuponValueValid);

    if(!userCupon) {
        alert("El cupon " + userCupon + " no es valido");
    } else {
        const descuento = userCupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        const resultP = document.getElementById("resultP");
        resultP.innerText = "Ell precio con descuento es de $" + precioConDescuento;
    }

    // if(!cupons.includes(cuponValue)) {
    //     alert("El cupon " + cuponValue + " no es valido");
    // } else if(cuponValue == "pambolero") {
    //     descuento = 15;
    // } else if(cuponValue == "biker") {
    //     descuento = 30;
    // } else if(cuponValue == "olimpico") {
    //     descuento = 40;
    // }

    // switch(cuponValue) {
    //     case "pambolero":
    //         descuento = 15;
    //     break;
    //     case "biker":
    //         descuento = 30;
    //     break;
    //     case "olimpico":
    //         descuento = 40;
    //     break;
    // }
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });