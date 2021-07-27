console.log("Hola Mundo");
// Codigo del cuadrado
console.group("cuadrado");
// const lado = 5;
// console.log("Los lados del cuadrado son: " + lado + "cm");
function perimetroCuadrado(lado) {
    return lado * 4;
}
// const perimetroCuadrado = lado * 4;
// console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado) {
    return lado * lado;
}
// const areaCuadrado = lado * lado;
// console.log("el area del cuadrado es: " + areaCuadrado + "cm");
console.groupEnd();

// Codigo del triangulo
console.group("triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "los lados del triangulo miden: "
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm"
// );
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo
console.group("circulo");
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
function diametroCirculo(radio) {
    return diametro = radio * 2;
}
// console.log("el diametro del circulo es: " + diametroCirculo + "cm");
// const pi = Math.PI;
// console.log("el valor de pi es: " + pi);
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}
// console.log("el perimetro del circulo es: " + perimetroCirculo + "cm");
function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}
// console.log("el area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();