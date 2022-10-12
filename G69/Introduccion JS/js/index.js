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


        // https://platzi.com/contributions/metodos-de-un-arreglo-en-javascript-filter-foreach-map-y-find/?utm_source=google&utm_medium=cpc&utm_campaign=17739691128&utm_adgroup=&utm_content=&gclid=Cj0KCQjwy5maBhDdARIsAMxrkw328bNcyatoMo2xZ70NvMBE-BrsmhEBSLO4rZowppdUADnkVah6FgwaAmW9EALw_wcB&gclsrc=aw.ds
        const arreglo = [1,2,3,4,5,6,7,8,9,10];
        // MapEl método Map tambien se encarga de crear un nuevo arreglo al igual que el metodo Filter. Cada elemento es multiplicado por 1000 y a su vez se almacenan en un nuevo arreglo llamado miles.
        const arreglo2 =  arreglo.map( (item)=>{ return item*2 });
        // El método Filter crea un nuevo arreglo, el cual no busca modificar el valor de los elementos para el nuevo arreglo, únicamente retorna aquellos elementos que cumplan con las condiciones del filtro, los cuales serán almacenados en otro arreglo.
        const arreglo3 = arreglo.filter( (item)=>{ return item !== 6 });
        // Find Con la ayuda del método Find podemos encontrar el primer valor que cumpla con función que definimos, en el siguiente ejemplo podemos observar que el arreglo posee 5 elementos numéricos, posteriormente en la variable myVal ejecutamos el método find y retornamos el elemento que sea mayor a 100 obteniendo como resultado el primer valor del arreglo que cumple con la condicion.
        const valor = arreglo.find( (item) => { return item === 8 });

        console.log(valor);


        formulario.addEventListener("submit", validarFormulario);
        enlaceContactos.addEventListener("click", listarContactos );
});


