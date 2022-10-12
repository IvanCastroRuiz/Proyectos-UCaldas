console.log("Starting");

// Bloq Import 

// Bloq variables y constantes

// Bloq funciones

// funcion Asyncrona

const listarApi = (id, titulo, contenido, resumen, url) => {

    let producto = document.querySelector(".listado");

    producto.innerHTML += `
                                        <div class="listado-guitarra">
                                            <img layout='responsive' width="100" height="180" src="${url}" alt="${titulo}/>
                                            <div class="listado-contenido">
                                                <h3>${titulo}</h3>
                                                <p class="listado-descripcion">${resumen}</p>
                                                <p class="listado-precio">$</p>
                                                    <a class="listado-enlace" href="${url}">
                                                        Ver Producto
                                                    </a>
                                            </div>
                                        </div>
                                    `;
                                    };

const consultarApi = async () =>{

    try {

        let respuesta =  await fetch("https://whispering-wildwood-03076.herokuapp.com/blogs");
        const resultado = await respuesta.json();
        console.log(resultado);

        resultado.forEach( (articulo) => { 
            // Destructurar un Objeto
            const {_id, titulo, contenido, resumen, imagen} = articulo;
            const { url } = imagen;
            listarApi(_id, titulo, contenido, resumen, url);
        
        });

    } catch (error) {
        console.log("Error: " + error.message);
    }
};

// Bloq Programa Principal

consultarApi();