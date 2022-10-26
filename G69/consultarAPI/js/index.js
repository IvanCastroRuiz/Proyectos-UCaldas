console.log("Starting");

// Bloq Import 

// Bloq variables y constantes

// Bloq funciones

// funcion Asyncrona

const listarApi = (id, nombre, descripcion, url, precio) => {

    let producto = document.querySelector(".listado");

    producto.innerHTML += `
                                        <div class="listado-guitarra">
                                            <img layout='responsive' width="100" height="180" src="${url}" alt="${nombre}">
                                            <div class="listado-contenido">
                                                <h3>${nombre}</h3>
                                                <p class="listado-descripcion">${descripcion}</p>
                                                <p class="listado-precio">$${precio}</p>
                                                    <a class="listado-enlace" href="${url}">
                                                        Ver Producto
                                                    </a>
                                            </div>
                                        </div>
                                    `;
                                    };

const consultarApi = async () =>{
    try {

        let respuesta =  await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras");
        const resultado = await respuesta.json();
        console.log(resultado);

        resultado.forEach( (articulo) => { 
            // Destructurar un Objeto
            const {_id, nombre, descripcion, imagen, precio} = articulo;
            const { url } = imagen;
            listarApi(_id, nombre, descripcion, url, precio);
        
        });

    } catch (error) {
        console.log("Error: " + error.message);
    }
};

// Bloq Programa Principal

consultarApi();