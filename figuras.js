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

// Codigo que interactua con html
// Calcular cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Calcular triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input = document.getElementById("inputTriangulo3");
    const value = input.value;
    const input2 = document.getElementById("inputAltura");
    const value2 = input2.value;

    const area = areaTriangulo(value, value2);
    alert(area);
}

// CCalcular circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}