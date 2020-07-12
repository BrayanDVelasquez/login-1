let formulario = document.getElementById('formulario');
let usuarioI = document.getElementById("usuario"); // i = input
let contrasenaI = document.getElementById("contrasena");

let mensaje_Usuario = document.getElementById('mensaje_Usuario');
let mensaje_Contra = document.getElementById('mensaje_Contra');

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    let datos = new FormData(formulario);

    if (datos.get('usuario') != 'admin777*') {
        campoError(usuarioI, mensaje_Usuario);
    } else {
        campoBien(usuarioI, mensaje_Usuario);

        if (datos.get('contrasena') != '123123123') {
           campoError(contrasenaI, mensaje_Contra);
        } else {
            campoBien(contrasenaI, mensaje_Contra);
            formulario.reset();
            formulario.submit();
            alert("¡Todo correcto!");
        }
    }

})