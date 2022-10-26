import React from 'react'

const Articulo = ({articulo}) => {

  const { _id, nombre, descripcion, precio, imagen } = articulo;

  const detalleEditar = (e) => {
      console.log("ID", e.target.id);
  };   

  const detalleEliminar = (e) => {
    console.log("ID", e.target.id);
}; 


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
                <img src={imagen.url} alt={nombre} />
            </p>
        </div>
        <div>
            <p>
                <strong>
                    Descripcion: {" "}
                </strong>   
                {descripcion}
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

        <button
            id={_id}
            onClick={detalleEditar}
        >
            Editar
        </button>
        <button
            id={_id}
            onClick={detalleEliminar}
        >
            Eliminar
        </button>
        <hr/>
    </div>
  )
}

export default Articulo