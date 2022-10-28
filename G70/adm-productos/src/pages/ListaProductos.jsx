import { useState, useEffect }  from 'react';

import Producto from './Producto';

const ListaProductos = () => {

  const [ consulta, setConsulta ] = useState([]);

  useEffect( () => {
    const consultarApi = async () => {
        try {
            const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras");
            const resultados = await respuesta.json();
            setConsulta(resultados);
        } catch (error) {
            console.log("Error: " + error.message);
        }
    };
    consultarApi();
  },[]);   

  return (
    <div className="listado">
        
        <h1>Lista Productos</h1>

        {
            consulta.length > 0 
                        ?
                            consulta.map( (producto) => (
                                <Producto
                                  key={producto._id}
                                  producto={producto}
                                />
                            ))
                        :
                            <p>No hay productos</p>
        }
        
    </div>
  )
}

export default ListaProductos