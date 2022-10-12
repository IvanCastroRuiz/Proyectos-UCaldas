// Bloque importar


// Bloque de variables y constantes
import { 
            formulario, 
            contactos 
        } from "../index.js"; 

let datos = {}; // Objeto Literal
// datos.nombre = "nombre";
// console.log(datos);

// const vec = [];
// vec[0] = 15;
// console.log(vec);

// Bloque funciones

const limpiarHTML = (listado) => {
    const formulario = document.querySelector(`${listado}`);
    if(formulario){
        while(formulario.firstChild){
            formulario.removeChild(formulario.firstChild);
        };
    };
};

const generarId = () =>{
    const randon = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return randon + fecha;
};

const sincronizarStorage = (contactos) =>{

    localStorage.setItem("contactos", JSON.stringify(contactos));

};

const mostrarSpinner = () =>{   
    let contenedorSpinner = document.querySelector('#contenedor-spinner');
    contenedorSpinner.innerHTML = `
                                    <div class="sk-cube-grid">
                                        <div class="sk-cube sk-cube1"></div>
                                        <div class="sk-cube sk-cube2"></div>
                                        <div class="sk-cube sk-cube3"></div>
                                        <div class="sk-cube sk-cube4"></div>
                                        <div class="sk-cube sk-cube5"></div>
                                        <div class="sk-cube sk-cube6"></div>
                                        <div class="sk-cube sk-cube7"></div>
                                        <div class="sk-cube sk-cube8"></div>
                                        <div class="sk-cube sk-cube9"></div>
                                    </div>
                                  `;
    let spinner = document.querySelector('.sk-cube-grid');
    setTimeout(() => {
        spinner.remove();
        mostrarMensaje("Registro exitoso, pronto te contactaremos");
    },3000);

};

const mostrarMensaje = (mensaje, error=null) => {
    
    let alerta = document.createElement("p");
    alerta.innerHTML = mensaje;
    
    if(error) {
        alerta.classList.add("error");
    }else{
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    },3000);

};

// Funciones Flechas
export const validarFormulario = (e) =>{
    e.preventDefault();
    
    let nombre = document.querySelector("#nombre").value;
    let telefono = document.querySelector("#telefono").value;
    let correo = document.querySelector("#correo").value;
    let mensaje = document.querySelector("#mensaje").value;

    
    // Implementation del filtro
    if([nombre,telefono,correo,mensaje].includes("")){
        mostrarMensaje("Todos los campos son obligatorios", true);
        return
    }

    // Paso la validacion


    Swal.fire({
        title: 'Estas seguro de guardar?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')

            // Guardar información
            datos = {
                "id": generarId(),
                "nombre": nombre,
                "telefono": telefono,
                "correo": correo,
                "mensaje":mensaje
            }
            contactos.push(datos);
            sincronizarStorage(contactos);

            formulario.reset();

            mostrarSpinner();

        } else if (result.isDenied) {
          Swal.fire('Informacion no registrada', '', 'info')
        }
    })    
};

export const listadoContactos = () => {

    // Buscar el formulario y borrarlo
    limpiarHTML("#form-contacto");

    let tablaListado = document.querySelector('#form-contacto');

    tablaListado.innerHTML = `
                                <main class="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
                                    <div class="flex flex-col mt-100">
                                        <div class="py-2 overflow-x-auto">
                                            <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                                <table class="min-w-full">
                                                    <thead class="bg-gray-100 ">
                                                        <tr>
                                                            <th id="nombre" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                    Nombre Cliente
                                                            </th>
                                                            <th id="telefono" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                    Teléfono
                                                            </th>
                                                            <th id="correo" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                    Correo
                                                            </th>
                                                            <th id="mensaje" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                    Mensaje
                                                            </th>
                                                            <th id="acciones" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                Acciones
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="listado-contactos" class="bg-white"
                                                    </tbody>    
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            `;

    // Listar Contactos en el HTML
    contactos.forEach( (contacto ) => {
        // Destructurar un objeto
        const { nombre, telefono, correo, mensaje, id } = contacto;
        const listadoContactos = document.querySelector('#listado-contactos');
        if(listadoContactos){
            listadoContactos.innerHTML += `
                                            <tr>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <p class="text-gray-600 font-bold"> ${nombre} </p>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                                    <p class="text-gray-600">${telefono}</p>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                                    <p class="text-gray-600">${correo}</p>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                                    <p class="text-gray-600">${mensaje}</p>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                                    <a id="editar" href="editar-contacto.html?id=${id}" data-contacto="${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                                    <a id="eliminar" href="#" data-contacto="${id}" class="eliminar text-red-600 hover:text-red-900">Eliminar</a>
                                                </td>
                                            </tr>
                                            `;
        };
    });

    // Fin Listar Contactos


};

