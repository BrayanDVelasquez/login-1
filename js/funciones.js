// Expresiones regulares
var espacio = /\s/;
var numeros = /[0-9]+/;
var minusculas = /[a-z]+/;
var mayusculas = /[A-Z]+/;
var expreCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+/;
var alfa = /[A-Za-z0-9]+/;

// funciones para validar campos
function validar_Campo(campo, minimo) {
    if (campo.length < minimo ||
        espacio.test(campo) ||
        numeros.test(campo)) {
        return false;
    } else {
        return true;
    }
}

function validar_Contra(campo, minimo) {
    if (campo.length < minimo ||
        espacio.test(campo) ||
        !numeros.test(campo) ||
        !mayusculas.test(campo) ||
        !minusculas.test(campo)) {
        return false;
    } else {
        return true;
    }
}

function validar_Correo(campo) {
    if (!expreCorreo.test(campo)) {
        return false;
    } else {
        return true;
    }
}

function validar_Usuario(campo, minimo) {
    if (!alfa.test(campo) ||
        campo.length < minimo ||
        espacio.test(campo)) {
        return false;
    } else {
        return true;
    }
}

function validar_Select(campo) {
    if (campo.value == '' ||
        campo.value == null) {
        return false;
    } else {
        return true;
    }
}

function campoError(input, aviso) {
    input.classList.remove('bien_Input');
    input.classList.add('error_Input');
    aviso.style.display = "block";
    aviso.classList.add("animar");
    input.focus();
}

function campoBien(input, aviso) {
    input.classList.add('bien_Input');
    input.classList.remove('error_Input');
    aviso.style.display = "none";
}