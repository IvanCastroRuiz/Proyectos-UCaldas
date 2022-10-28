import { Link } from 'react-router-dom';

const Articulo = ({articulo}) => {

  const { _id, nombre, descripcion, precio, imagen } = articulo;

//   const detalleEditar = (e) => {
//       console.log("ID", e.target.id);
//   };   

//   const detalleEliminar = (e) => {
//     console.log("ID", e.target.id);
//   }; 

  return (
    <div>
        <div>
            <p>
                <strong>
                    Producto: {" "}
                </strong>   
                {nombre}
            </p>
        </div>
        <div>
            <p>
                <img layout='responsive' width="100" height="220" src={imagen.url} alt={nombre} />
            </p>
        </div>
        <div>
            <p>
                <strong>
                    Precio: {" "}
                </strong>   
                {precio}
            </p>
        </div>
            <nav className="navegacion-principal contenedor">
                <Link
                    id={_id}
                    to={`/detalle-articulo/${_id}`}
                    className="boton w-100" 
                >
                    Detalle
                </Link>
            </nav>    
        <hr/>
    </div>
  )
}

export default Articulo