let enviar = document.getElementById("enviar");
enviar.addEventListener("click", grados);

function grados(){
    let grados = Number(document.getElementById("grados").value);
    let tipoGrados = document.getElementById("tipoGrados").value;
    let convertirGrados = document.getElementById("convertirGrados").value;
    let resultado;
    if (tipoGrados == convertirGrados) {
        resultado = grados;
    }
    else if (tipoGrados == "Fahrenheit") {
        if (convertirGrados == "Celsius") {
            resultado = (grados-32)*5/9;
        }
        else if (convertirGrados == "Kelvin"){
            resultado = (grados - 32);
            resultado = resultado *5/9 +273.15;
        }
    }
    if (tipoGrados == "Celsius") {
        if (convertirGrados == "Fahrenheit") {
            resultado = (grados * 5/9) + 32 ;
        }
        else if (convertirGrados == "Kelvin"){
            resultado = grados + 273.15;
        }
    }
    if (tipoGrados == "Kelvin") {
        if (convertirGrados == "Celsius") {
            resultado = grados - 273.15;
        }
        else if (convertirGrados == "Fahrenheit"){
            resultado = (grados - 273.15)*9/5 + 32;
        }
    }
    alert("La convercion de "+grados+" grados "+tipoGrados+"a grados "+convertirGrados+" es: "+resultado);  
}

