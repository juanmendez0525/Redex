function validar() {
    let correos = ["jkmendez489@gmail.com", "juank_mendez06@yahoo.com", "juanabcdefg1@gamil.com", "juankmendez000@gmail.com"];
    let contraseñas = ["jk12345678","juank12345678","juanabc12345678"];
    let passwordField = document.getElementById("password");
    let emailField = document.getElementById("correo");

    

    // Validación de la contraseña
    if (passwordField.value.length == 0) {
        alert("Por favor ingrese una contraseña");
        return false;
    }
    if (passwordField.value.length < 8) {
        alert("La contraseña requiere al menos 8 caracteres");
        return false;
    }

    // Validación del correo electrónico
    var validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;
    if (!validEmail.test(emailField.value)) {
        alert("Correo electrónico inválido");
        return false;
    }

    let correoIngresado = document.getElementById('correo').value;
    let posicion = correos.indexOf(correoIngresado);

    if (posicion == -1) {
        alert("este correo no existe");
        return false;
    }

    let contraseñaIngresada = document.getElementById('password').value;
    let posicion2 = contraseñas.indexOf(contraseñaIngresada);

    if (posicion2 !== posicion) {
        alert("Contraseña incorrecta");
        return false;
    } 

    return true;
}



