console.log("Conectado");
// Bloque Importar (Librerias o JS Externos)

import {
        validarFormulario, 
        listarContactos,
        mostrarFormulario
       } 
from '../js/helpers/funciones.js'


// Bloque Variables globales y contstantes

export let contactos = [];

let formulario = document.querySelector('.formulario');
let enlaceContactos = document.querySelector('#lista-contacto');
//let enlaceFormulario = document.querySelector('#formulario-inicio');

// Bloque Funciones

// Bloque Programa Principal

// Escuchador de evento


document.addEventListener('DOMContentLoaded', () =>{

        contactos = JSON.parse( localStorage.getItem('contactos') ) || [];

        formulario.addEventListener("submit", validarFormulario);
        enlaceContactos.addEventListener("click", listarContactos );
        //enlaceFormulario.addEventListener("click", mostrarFormulario);
});


