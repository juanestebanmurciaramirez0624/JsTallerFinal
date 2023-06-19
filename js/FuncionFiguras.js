let enviar = document.getElementById("areaCirculo");
enviar.addEventListener("click", areaCirculo);
let area;
let perimetro;

function areaCirculo() {
    let divElement = document.getElementById('content');
    let radio = Number(document.getElementById("radio").value);
    area = Math.PI * (Math.pow(radio, 2));
    divElement.innerHTML = "El area del circulo es: " + area;
}

enviar = document.getElementById("perimetroCirculo");
enviar.addEventListener("click", perimetroCirculo);

function perimetroCirculo() {
    let divElement = document.getElementById('contentperimetro');
    let radio = Number(document.getElementById("radioPerimetro").value);
    perimetro = 2 * (Math.PI * radio);
    divElement.innerHTML = "El perimetro del circulo es: " + perimetro;
}

enviar = document.getElementById("areaCuadrado");
enviar.addEventListener("click", areaCuadrado);

function areaCuadrado() {
    let divElement = document.getElementById('contentCuadrado');
    let lado = Number(document.getElementById("lado").value);
    area = Math.pow(lado, 2);
    divElement.innerHTML = "El area del cuadrado es: " + area;
}

enviar = document.getElementById("perimetroCuadrado");
enviar.addEventListener("click", perimetroCuadrado);

function perimetroCuadrado() {
    let divElement = document.getElementById('contentPerimetroCuadrado');
    let lado = Number(document.getElementById("ladoc").value);
    perimetro = 4 * lado;
    divElement.innerHTML = "El perimetro del cuadrado es: " + perimetro;
}

enviar = document.getElementById("areaRectangulo");
enviar.addEventListener("click", areaRectangulo);

function areaRectangulo() {
    let divElement = document.getElementById('contentRectangulo');
    let lado = Number(document.getElementById("lador").value)
    let base = Number(document.getElementById("base").value)
    area = lado * base;
    divElement.innerHTML = "El area del rectangulo es: " + area;
}

enviar = document.getElementById("perimetroRectangulo");
enviar.addEventListener("click", perimetroRectangulo);

function perimetroRectangulo() {
    let divElement = document.getElementById('contentPerimetroRectangulo');
    let lado = Number(document.getElementById("ladorec").value)
    let base = Number(document.getElementById("baser").value)
    perimetro = 2 * (lado + base);
    divElement.innerHTML = "El perimetro del rectangulo es: " + perimetro;
}

enviar = document.getElementById("areaTriangulo");
enviar.addEventListener("click", areaTriangulo);

function areaTriangulo() {
    let divElement = document.getElementById('contentTriangulo');
    let base = Number(document.getElementById("baset").value)
    let altura = Number(document.getElementById("altura").value)
    area = (base * altura) / 2;
    divElement.innerHTML = "El area del triangulo es: " + area;
}

enviar = document.getElementById("perimetroTriangulo");
enviar.addEventListener("click", perimetroTriangulo);

function perimetroTriangulo() {
    let divElement = document.getElementById('contentPerimetroTriangulo');
    let lado1 = Number(document.getElementById("lado1").value)
    let lado2 = Number(document.getElementById("lado2").value)
    let lado3 = Number(document.getElementById("lado3").value)
    perimetro = lado1 + lado2 + lado3;
    divElement.innerHTML = "El perimetro del triangulo es: " + perimetro;
}

