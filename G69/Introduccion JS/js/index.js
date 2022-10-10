console.log("Conectado");
// Bloque Importar (Librerias o JS Externos)

import {
        validarFormulario, 
        listarContactos
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
        console.log(contactos);
        console.log(contactos[0]);
        console.log(contactos[0].nombre);
        console.log(contactos[0]["telefono"]);
        formulario.addEventListener("submit", validarFormulario);
        enlaceContactos.addEventListener("click", listarContactos );
});


