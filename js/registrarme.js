let formulario = document.getElementById('formulario');
let mensaje_Nombre = document.getElementById('mensaje_Nombre');
let mensaje_Apellido = document.getElementById('mensaje_Apellido');
let mensaje_Usuario = document.getElementById('mensaje_Usuario');
let mensaje_Correo = document.getElementById('mensaje_Correo');
let mensaje_Contra = document.getElementById('mensaje_Contra');
let mensaje_Contra2 = document.getElementById('mensaje_Contra2');
let mensaje_Genero = document.getElementById('mensaje_Genero');

let nombreI = document.getElementById("nombre"); // i = input
let apellidoI = document.getElementById("apellido");
let correoI = document.getElementById("correo");
let usuarioI = document.getElementById("usuario");
let contraI = document.getElementById("contrasena");
let contraI2 = document.getElementById("contrasena2");
let generoI = document.getElementById("genero");

let btnRegistrar = document.getElementById('btnRegistrar');

btnRegistrar.addEventListener('click', evento => {
    evento.preventDefault();
    let datos = new FormData(formulario);

    if (validar_Campo(datos.get('nombre'), 2) == false) {
        campoError(nombreI, mensaje_Nombre);
    } else {
        campoBien(nombreI, mensaje_Nombre);

        if (validar_Campo(datos.get('apellido'), 2) == false) {
            campoError(apellidoI, mensaje_Apellido);
        } else {
            campoBien(apellidoI, mensaje_Apellido);

            if (validar_Correo(datos.get('correo')) == false) {
                campoError(correoI, mensaje_Correo);
            } else {
                campoBien(correoI, mensaje_Correo);

                if (validar_Usuario(datos.get('usuario'), 8) == false) {
                    campoError(usuarioI, mensaje_Usuario);
                } else {
                    campoBien(usuarioI, mensaje_Usuario);

                    if (validar_Contra(datos.get('contrasena'), 7) == false) {
                        campoError(contraI, mensaje_Contra);
                    } else {
                        campoBien(contraI, mensaje_Contra);

                        if (validar_Contra(datos.get('contrasena2'), 7) == false) {
                            campoError(contraI2, mensaje_Contra2);
                        } else if (datos.get('contrasena2') != datos.get('contrasena')) {
                            campoError(contraI2, mensaje_Contra2);
                        } else if (datos.get('contrasena') == datos.get('contrasena2')) {
                            campoBien(contraI2, mensaje_Contra2);

                            if (validar_Select(generoI) == false) {
                                campoError(generoI, mensaje_Genero);
                            } else {
                                campoBien(generoI, mensaje_Genero);
                                formulario.submit();
                            }
                        }
                    }
                }
            }
        }
    }
})