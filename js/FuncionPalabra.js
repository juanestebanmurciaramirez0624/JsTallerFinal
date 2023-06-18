let enviar = document.getElementById("enviar");
enviar.addEventListener("click", palabra);

function palabra() {
    let palabra = String(document.getElementById("palabra").value);
    let opcion = Number(document.getElementById("opcion").value);
    switch (opcion) {
        case 1:
            alert("La longitud de la palabra "+palabra+" es:\n"+palabra.length);
            break;
        case 2:
            alert("La palabra "+palabra+" en mayusucula es:\n"+palabra.toUpperCase());
            break;
        case 3:
            alert("La palabra "+palabra+" en minuscula es:\n"+palabra.toLowerCase());
            break;
        case 4:
            alert("El primer caracter de la palabra "+palabra+" es:\n"+palabra.charAt(0));
            break;
    }
}

