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
        let respuesta = await fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=COP");
        let resultados = await respuesta.json();
        //console.log(resultados.Data[0].CoinInfo.FullName);
        console.log(resultados.Data);

    }catch(e){
        console.error(e.message);
    }

}; 

// Programa Principal
// Escuchador de eventos

document.addEventListener("DOMContentLoaded", () => {
    contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    console.log(contactos);
    formulario.addEventListener("submit", validarFormulario );
    enlaceListaContacto.addEventListener("click", listadoContactos );
    consultarApi();
});