// Bloque importar


// Bloque de variables y constantes
import { 
            formulario, 
            contactos 
        } from "../index.js"; 

let datos = {}; // Objeto Literal

// Bloque funciones

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