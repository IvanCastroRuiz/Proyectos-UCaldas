console.log("Starting");

// Bloque Import (librerias - otros archivos JS)

import {
        listaContactos,
        validarFormulario
    } from "../js/helper.js";

export let contactos = [];

// Bloque Variables y Constantes

let formulario = document.querySelector(".formulario");
let enlaceListaContacto = document.querySelector("#lista-contacto");

// Bloque Funciones

// Bloque Programa Principal

// Escuchador de eventos 

document.addEventListener("DOMContentLoaded", () => {

    // Consultamos si en locaStorage hay contactos (getItem)
    // Convierte una cadena de texto a una estructura de datos valida en JS (parse)
    contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    console.log(contactos);

    formulario.addEventListener("submit", validarFormulario);
    enlaceListaContacto.addEventListener("click", listaContactos);
});
