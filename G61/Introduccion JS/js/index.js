console.log("Starting");

// Import (librerias - otros archivos JS)


// Variables y Constantes

// Trabajando con vectores
let contactos = [];
// Objectos Literales (diccionario)
let datos = {};


let formulario = document.querySelector(".formulario");

// Funciones

const mostrarMensaje = (mensaje, error=null) => {

    const alerta = document.createElement('p');

    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);

};

// Funcion Flecha
const validarFormulario = (e) => {
    e.preventDefault();
    
    let cedula = document.querySelector("#cedula").value;
    let nombre = document.querySelector("#nombre").value;
    let telefono = document.querySelector("#telefono").value;
    let correo = document.querySelector("#correo").value;
    let mensaje = document.querySelector("#mensaje").value;

       
    if([cedula,nombre,telefono,mensaje,correo].includes("")){
        mostrarMensaje("Todos los campos son obligatorios", true);
        return
    }

    // Paso la validacion
    mostrarMensaje("Enviando a la bases de datos");
    datos = {
        "cedula": cedula,
        "nombre": nombre, 
        "telefono": telefono, 
        "correo": correo,
        "mensaje":mensaje
    }

    console.log(datos);   
    contactos.push(datos); // metodo push para insertar elementos en un vector
    
    console.log(contactos);  

    formulario.reset();
}

// Escuchador de eventos
formulario.addEventListener("submit", validarFormulario);

// Programa Principal
 
 