function ejecutarEjercicio4() {
function areaTriangulo(base, altura) {
    return 0.5*base*altura;
}

let base = parseInt(prompt("Ingrese el valor de la base del triángulo"));
let altura = parseInt(prompt("Ingrese el valor de la altura del triángulo"));
let area = areaTriangulo(base, altura);
console.log = area;

alert ("El área del triángulo es de: " + area);






}