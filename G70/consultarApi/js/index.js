console.log("Starting");


// Bloq Import

// Bloq variables y constantes

const listarGuitarras = (resultado) => {

    resultado.forEach( (guitarra) =>{
        // Destructurar Objeto
        const { nombre, descripcion, imagen, precio } = guitarra;
        document.body.innerHTML += `
                                        <div class="container-img">
                                            <div>
                                                <strong>Nombre:</strong>${nombre}                               
                                            </div>

                                            <div>
                                                <img  layout='responsive' width="100" height="220" src="${imagen.url}" alt="${nombre}"/>
                                            </div>

                                            <div>
                                                <strong>Descripcion:</strong>${descripcion}                               
                                            </div>

                                            <div>
                                                <strong>Precio:</strong>${precio}                               
                                            </div>
                                        </div>
                                    `;
    });
};

// Bloq Funciones
const consultarApi = async () => {

    try {

        const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras/");
        //const respuesta = await fetch("contactos.json");
        const resultados = await respuesta.json();
        //console.log(resultados);
        listarGuitarras(resultados);

    } catch (error) {
        console.log("Error: " + error.message);
    }
};

// Bloq Programa Principal
consultarApi();