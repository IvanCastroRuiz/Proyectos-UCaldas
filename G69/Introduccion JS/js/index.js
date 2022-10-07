console.log("Conectado");
// Importar (Librerias o JS Externos)


// Variables globales y contstantes

let contactos = []; // Vector
let datos = {}; // Objeto literal (diccionario)

let formulario = document.querySelector('.formulario');
let titulo = document.querySelector('.titulo');

// Funciones

const mostrarSpinner = (mensaje) => {
    const proceso = document.querySelector('#proceso');
    proceso.innerHTML = `
                            <div class="spinner">
                                <div class="rect1"></div>
                                <div class="rect2"></div>
                                <div class="rect3"></div>
                                <div class="rect4"></div>
                                <div class="rect5"></div>
                            </div>
                        `;

    setTimeout(() => {
        // Eliminar el parrafo del formulario en 3 segundo
        proceso.remove();
        mostrarDatos(mensaje);
    }, 3000);     

};

const mostrarDatos = (mensaje, error=null) => {

    // Instruccion para Crea cualquier tipo de etiqueta
    const alerta = document.createElement('p');

    // Insertar el mnensaje al parrafo
    alerta.textContent = mensaje;
   
    if(error) {
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    // Insertar en el formulario el parrafo 
    formulario.appendChild(alerta);

    setTimeout(() => {
        // Eliminar el parrafo del formulario en 3 segundo
        alerta.remove();
    }, 3000);    

};  

// Funcion Flecha
const validarFormulario = (e) => {
    e.preventDefault();

    let nombre = document.querySelector('#nombre').value;    
    let telefono = document.querySelector('#telefono').value;    
    let correo = document.querySelector('#correo').value;    
    let mensaje = document.querySelector('#mensaje').value;   
    
    // Validar Condicional

    if([nombre,telefono,correo,mensaje].includes("")){
        mostrarDatos("Todos los campos son obligatorios", true);
        return
    }

    // Pase la validacion

    mostrarSpinner("Enviando la información a la base de datos");    

    datos = {
        "nombre": nombre,
        "telefono": telefono,
        "correo": correo,
        "mensaje":mensaje
    };


    contactos.push(datos);

    console.log(datos);
    // console.log(datos.mensaje);
    console.log(contactos);

    formulario.reset();

};


// Programa Principal

// Escuchador de evento
formulario.addEventListener("submit", validarFormulario);
titulo.addEventListener("click", () =>{
    alert("Diste Click al titulo");
});