import { useState,useEffect  } from 'react'

import Spinner from '../components/Spinner';
import Articulo from '../page/Articulo';

const ListaArticulos = () => {

  const [ consulta, setConsulta ] = useState({});
  const [ spinner, setSpinner ] = useState(true);

  // Cuando cargue el componente consulte una API
  // https://whispering-wildwood-03076.herokuapp.com/guitarras
  useEffect(()=>{
    const consultarApi = async () => {
      try {
        const respuesta = await fetch('https://whispering-wildwood-03076.herokuapp.com/guitarras');
        //const respuesta = await fetch('/src/assets/articulos.json');
        const resultado = await respuesta.json();
        setConsulta(resultado);
      } catch (error) {
        console.error(error.message);
      }
    };
    consultarApi();
  }, []);

  return (
    <>
      {
        spinner 
                ?
                  <Spinner
                    spinner={spinner} 
                    setSpinner={setSpinner}
                  />
                :
                  <div className="lista-articulos">

                      {
                         consulta.length > 0 
                                      ?
                                        
                                          consulta.map( (articulo) => (
                                                <Articulo
                                                  key={articulo._id}
                                                  articulo={articulo}
                                                />
                                          ) )
                                        
                                      :
                                        <p>No hay articulos</p>
                      }

                  </div>  

      }
      
    </>
  )
}

export default ListaArticulos