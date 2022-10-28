import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const DetalleProducto = () => {

  const [ producto, setProducto ] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect( () => {
    const consultarApi = async () => {
        try {
            const respuesta = await fetch(`https://whispering-wildwood-03076.herokuapp.com/guitarras/${id}`);
            const resultados = await respuesta.json();
            setProducto(resultados);
        } catch (error) {
            console.log("Error: " + error.message);
        }
    };
    consultarApi();
  },[]); 

  const { _id, nombre, descripcion, precio, imagen } = producto;

  return (
    <>
    {
            _id 
                ?
                  <div>
                      
                      <h3>
                          <strong>{ nombre } </strong>
                      </h3>
                      <div>
                        <img layout='responsive' width="100" height="220" src={imagen.url} alt={nombre}/>
                        <h4>Precio: $ { " " }  { precio } </h4>
                        <p>
                          { descripcion }
                        </p>
                      </div>                  

                      <div>
                          <Link
                              to="/productos"
                          >
                              Regresa a Listado de Productos
                          </Link>
                      </div>
                  </div> 
                :
                  <p>
                    No hay informacion del producto, intentanuevamente.
                  </p>      
    }
    </>
  )
}

export default DetalleProducto