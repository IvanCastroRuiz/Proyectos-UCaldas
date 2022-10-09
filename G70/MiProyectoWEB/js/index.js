console.log("Connected");

// Importamos librerias o archivos JS
import {
          validarFormulario
       }
       from './helpers/funciones.js';

// Contantes y variables

export let contactos = []; // Vector
export let formulario = document.querySelector(".formulario");

// Funciones


// Programa Principal
// Escuchador de eventos


document.addEventListener("DOMContentLoaded", () => {


    contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    console.log(contactos);
    formulario.addEventListener("submit", validarFormulario );

});