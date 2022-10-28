import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DetalleArticulo = () => {

  const params = useParams();  
  const { id } = params;

  const [ articulo, setArticulo ] = useState({});

  useEffect(()=>{
    const consultarApi = async () => {
      try {
        const respuesta = await fetch(`https://whispering-wildwood-03076.herokuapp.com/guitarras/${id}`);
        //const respuesta = await fetch('/src/assets/articulos.json');
        const resultado = await respuesta.json();
        setArticulo(resultado);
      } catch (error) {
        console.error(error.message);
      }
    };
    consultarApi();
  }, []);

  const { _id, nombre, descripcion, precio, imagen  } = articulo;

  return (

    <>
        {
           _id
              ?
                <div>
                    <h2>
                        { nombre }
                    </h2>
                    <div>
                        <img layout='responsive' width="100" height="220" src={imagen.url} alt={nombre} />
                        <p>
                            <strong>Precio:  $ {precio}</strong>
                        </p>
                        <p>
                            { descripcion }
                        </p>
                    </div>    
                </div>
              :
                <p>
                    Error al cargar el producto, intenta nuevamente
                </p>    
        }

                <div>
                    <Link
                        to="/lista-articulo"
                    >
                        Regresa a lista de producto
                    </Link>
                </div>

    </>
  )
}

export default DetalleArticulo