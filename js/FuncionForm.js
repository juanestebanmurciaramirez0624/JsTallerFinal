function validarFormulario() {
    const TypeDocument = document.getElementById("TypeDocument");
    const numberDoc = document.getElementById("numberDoc").value;
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const date = document.getElementById("date").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const conPassword = document.getElementById("conPassword").value;
    const checkbox = document.getElementById("checkbox");

    let alfanumerico = /^[a-zA-Z0-9\s]+$/;
    let misena = "@misena.edu.co";
    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    let dateEntered = new Date(date);
    let currentDate = new Date();
    let Limitdate = new Date();
    Limitdate.setFullYear(currentDate.getFullYear() - 18);

    if (TypeDocument.value === "" || numberDoc === "" || name === "" || lastname === "" || date === "" || email === "" || password === "" || conPassword === "") {
        alert('Todos los campos son olbigaotrios');
        return false;
    }
    if (isNaN(numberDoc)) { //isNaN evalua si el campo es numerico
        alert('El numero de documento debe ser numérico');
        return false;
    }
    if (numberDoc.length < 5) {
        alert('El numero de documento debe contar con almenos 5 digitos');
        return false;
    }
    if (!alfanumerico.test(name)) {
        alert('El nombre debe ser alfanumérico');
        return false;
    }
    if (!alfanumerico.test(lastname)) {
        alert('El apellido debe ser alfanumérico');
        return false;
    }

    if (dateEntered > Limitdate) {
        alert('Debe ser mayor de edad');
        return false;
    }

    if (!email.endsWith(misena)) { //endsWith permite validar si una cadena de texto termina con una sudcadena especifica
        alert('El dominio del correo electrónico debe ser misena.edu.co');
        return false;
    }

    if (!passwordValidation.test(password)) {
        alert('La contraseña debe incluir una mayuscula, una minuscula, un caracter especial, un numero y debe tener un largo de al menos 10 caracteres');
        return false;
    }

    if (password != conPassword) {
        alert('La contraseña debe coincidir con la confirmacion de contraseña');
        return false;
    }
    if (!checkbox.checked) {
        alert('Debe aceptar terminos y condiciones');
        return false;
    }
    return true;
}

//Terminos y servicios
let openTerminos = document.getElementById("OpenTerminos");
let modalTerminos = document.getElementById("modal-terminos");
let closeTerminos = document.getElementById("modal-closeTerminos")

openTerminos.onclick = function () {
    modalTerminos.style.visibility = "visible";
}

closeTerminos.onclick = function () {
    modalTerminos.style.visibility = "hidden";
}
