console.log("Starting");

// Bloque Import (librerias - otros archivos JS)

import {
        limpiarHTML, 
        listaContactos,
        spinner,
        mostrarMensaje,
        validarFormulario
    } from "../js/helper.js";

// Bloque Variables y Constantes

let formulario = document.querySelector(".formulario");
let enlaceListaContacto = document.querySelector("#lista-contacto");

// Bloque Funciones

// Bloque Programa Principal

// Escuchador de eventos 
formulario.addEventListener("submit", validarFormulario);
enlaceListaContacto.addEventListener("click", listaContactos);