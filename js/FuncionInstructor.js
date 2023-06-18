let enviar = document.getElementById("enviar");
enviar.addEventListener("click", instructor);

function instructor(){
    let nameinstructor = document.getElementById("nameinstructor").value;
    let lastnameinstructor = document.getElementById("lastnameinstructor").value;
    let materia = document.getElementById("materia").value;

    if (nameinstructor == "Yaneth" && lastnameinstructor == "Castillo" && materia == "Proteccion") {
        alert("La respuesta es correcta");
    }
    else if(nameinstructor == "Manuel" && lastnameinstructor == "Garavito" && materia == "Python"){
        alert("La respuesta es correcta");
    }
    else if(nameinstructor == "Erick" && lastnameinstructor == "Granados" && materia == "java"){
        alert("La respuesta es correcta");
    }
    else if(nameinstructor == "Paula" && lastnameinstructor == "Romero" && materia == "Emprendimiento"){
        alert("La respuesta es correcta");
    }
    else if(nameinstructor == "Narly" && lastnameinstructor == "Sanchez" && materia == "SQL" || materia == "js"){
        alert("La respuesta es correcta");
    }
    else if(nameinstructor == "Cristian" && lastnameinstructor == "Buitrago" && materia == "Proyecto"){
        alert("La respuesta es correcta");
    }
    else if(nameinstructor == "Julian" && lastnameinstructor == "Aranguren" && materia == "Investigacion"){
        alert("La respuesta es correcta");
    }
    else if(nameinstructor == "Andrea" && lastnameinstructor == "Ramos" && materia == "Comunicacion"){
        alert("La respuesta es correcta");
    }
    else{
        alert("Respuesta es incorrecta")
    }
}