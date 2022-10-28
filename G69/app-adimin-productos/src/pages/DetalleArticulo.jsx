import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DetalleArticulo = () => {

 const params = useParams();
 const { id } = params;

 const [ articulo, setArticulo ] = useState({});

 useEffect( () =>{
    const consultarApi = async () =>{
      try {
  
          let respuesta =  await fetch(`https://whispering-wildwood-03076.herokuapp.com/guitarras/${id}`);
          //let respuesta =  await fetch("http://localhost:3000/articulos");
          //let respuesta =  await fetch("../src/assets/articulos.json");
          const resultado = await respuesta.json();
          setArticulo(resultado);
  
      } catch (error) {
          console.log("Error: " + error.message);
      }
    };
    consultarApi();
  }, []);   

  const { _id, nombre, descripcion, precio, imagen} = articulo

  return (
    <>
        {
            _id
                ?
                <div>
                    <h1 className="font-bold tracking-tight text-gray-900">{nombre}</h1>
                    <div className="mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src={imagen.url}
                                    alt={nombre}
                                    className="object-containt h-100 w-220 m-auto"
                                />
                        </div>
                        <p className="text-6xl text-gray-900">$ {precio}</p>
                        <p className="text-xxl text-justify text-gray-900"> {descripcion}</p>
                    </div>
                </div>       
                :
                    <div>
                        <p>
                            Error, intentanuevamente la consulta del articulo
                        </p>
                    </div>
        }

        <div className="p-6">
            <Link
                className="btn bg-cyan-600 text-center text-3xl text-slate-200 font-bold"
                to="/lista-articulo"
            >
                Regresa a listado de articulos
            </Link>
        </div>
    </>
  )
}

export default DetalleArticulo
