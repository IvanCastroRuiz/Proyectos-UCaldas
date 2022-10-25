import { useState,useEffect  } from 'react'

const ListaArticulos = () => {

  const [ consulta, setConsulta ] = useState({});

  // Cuando cargue el componente consulte una API
  // https://whispering-wildwood-03076.herokuapp.com/guitarras
  useEffect(()=>{
    const consultarApi = async () => {
      try {
        const respuesta = await fetch('https://whispering-wildwood-03076.herokuapp.com/guitarras');
        const resultado = await respuesta.json();
        setConsulta(resultado);
        console.log(consulta);
        console.log(resultado);
      } catch (error) {
        console.error(error.message);
      }
    };
    consultarApi();
  }, []);

  return (
    <div>ListaArticulos</div>
  )
}

export default ListaArticulos