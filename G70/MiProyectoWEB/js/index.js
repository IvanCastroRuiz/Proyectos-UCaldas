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

const consultarApi = async () => {

    try{
        let respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/blogs");
        let resultados = await respuesta.json();
        //console.log(resultados.Data[0].CoinInfo.FullName);
        console.log(resultados);

    }catch(e){
        console.error(e.message);
    }

}; 

// Programa Principal
// Escuchador de eventos

document.addEventListener("DOMContentLoaded", () => {
    contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    console.log(contactos);

    console.log(contactos[5].id = 123456)
    console.log(contactos[5]["nombre"])

    console.log(contactos[5]["nombre"] = "ASHLEE CASTRO")


    const persona = {
        nombre: "ASHLEE CASTRO",
        telefono: 3003162985,
        dirrecion: {
            lat: 5.4222,
            lon: 5.2333
        },
        nombrecompleto: function () { 
            return ` Su nombre es ${this.nombre} `;
        }

    }

    // console.log(persona);
    // console.log(persona["dirrecion"]["lon"]);
    // console.log(persona.dirrecion.lon);
    // console.log(persona.nombrecompleto());

    //const persona1 = {...persona};

    const persona1 = {...persona};
    persona1.nombre = "Juan Perez"

    console.log(persona);
    console.log(persona1);


    formulario.addEventListener("submit", validarFormulario );
    enlaceListaContacto.addEventListener("click", listadoContactos );
    consultarApi();
});
