console.log("Connected");

// Importamos librerias o archivos JS


// Contantes y variables

let contactos = []; // Vector
let data = {}; // Objeto Literal

let formulario = document.querySelector(".formulario");

// Funciones

const mostrarMensaje = (mensaje, error=null) => {
    
    let alerta = document.createElement("p");
    alerta.innerHTML = mensaje;
    
    if(error) {
        alerta.classList.add("error");
    }else{
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    },3000);

};

// Funciones Flechas
const validarFormulario = (e) =>{
    e.preventDefault();
    
    let nombre = document.querySelector("#nombre").value;
    let telefono = document.querySelector("#telefono").value;
    let correo = document.querySelector("#correo").value;
    let mensaje = document.querySelector("#mensaje").value;

    
    // Implementation del filtro
    if([nombre,telefono,correo,mensaje].includes("")){
        mostrarMensaje("Todos los campos son obligatorios", true);
        return
    }

    // Paso la validacion
    mostrarMensaje("Enviando la información a la Base de datos");

    datos = {
        "nombre": nombre,
        "telefono": telefono,
        "correo": correo,
        "mensaje":mensaje
    }

    console.log(datos);
    contactos.push(datos);

    console.log(contactos);
    formulario.reset();
}

// Programa Principal

// Escuchador de eventos
formulario.addEventListener("submit", validarFormulario );