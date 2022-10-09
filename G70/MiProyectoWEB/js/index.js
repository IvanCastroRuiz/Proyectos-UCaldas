console.log("Connected");

// Importamos librerias o archivos JS
import {
          validarFormulario,
          listadoContactos
       }
       from './helpers/funciones.js';

// Contantes y variables

export let contactos = []; // Vector
export let formulario = document.querySelector(".formulario");
let enlaceListaContacto = document.querySelector("#lista-contacto");

// Funciones


// Programa Principal
// Escuchador de eventos


document.addEventListener("DOMContentLoaded", () => {


    contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    console.log(contactos);
    formulario.addEventListener("submit", validarFormulario );

    enlaceListaContacto.addEventListener("click", listadoContactos );

});