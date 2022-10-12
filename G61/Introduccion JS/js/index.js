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



    // Aclaraciones

    const persona = {
        nombre: "IVAN",
        edad: 43,
        telefonos: [
            {personal: 3003162985, nombre: "IVAN"},
            {trabajo: 0000000},
            {madre: 3124545}
        ],
        familia: [
            {
                madre: "Saya",
                telefono: 3013214564,
                dirreccion: "dire"
            }
        ]
    };

    persona.estadoCivil = true;
    persona["dirreccion"] = "Calle la playa km via a puerto";
    console.log(persona.telefonos[0].nombre);
    console.log(persona.telefonos[0].personal);

    // Fin Aclaraciones


    formulario.addEventListener("submit", validarFormulario);
    enlaceListaContacto.addEventListener("click", listaContactos);
});
