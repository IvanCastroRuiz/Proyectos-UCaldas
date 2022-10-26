import { useState, useEffect }  from 'react'

const ListaProductos = () => {

  const [ consulta, setConsulta ] = useState({});

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
    <div>
        
        ListaProductos

        {
            consulta.length > 0 
                        ?
                            <p>Dibujar los productos</p>
                        :
                            <p>No hay productos</p>
        }
        
    </div>
  )
}

export default ListaProductos