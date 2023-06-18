let enviar = document.getElementById("enviar");
enviar.addEventListener("click", tipoTriangulo);

function tipoTriangulo(){
    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);
    if (lado1 == lado2 && lado2 != lado3) {
        alert("El triangulo es tipo Isóceles");
    }
    else if(lado1 != lado2 && lado2 == lado3){
        alert("El triangulo es tipo Isóceles");
    }
    else if(lado1 == lado3 && lado2 != lado3){
        alert("El triangulo es tipo Isóceles");
    }
    else if(lado1 == lado2 && lado2 == lado3){
        alert("El triangulo es tipo Equilátero");
    }
    else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        alert("El triangulo es tipo Escaleno");
    }

}