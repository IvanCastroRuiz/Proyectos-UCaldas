console.log("Conectado");
// Bloque Importar (Librerias o JS Externos)

import {
        validarFormulario, 
        listarContactos
       } 
from '../js/helpers/funciones.js'


// Bloque Variables globales y contstantes

let formulario = document.querySelector('.formulario');
let listaContacto = document.querySelector('#lista-contacto');

// Bloque Funciones

// Bloque Programa Principal

// Escuchador de evento
formulario.addEventListener("submit", validarFormulario);
listaContacto.addEventListener("click", listarContactos );
