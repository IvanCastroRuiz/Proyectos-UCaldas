import React from 'react';
import { Link } from 'react-router-dom';

const Producto = ({producto}) => {

  const { _id, nombre, descripcion, precio, imagen } = producto;

  return (
    <div>
      <h3>
          <strong>{ nombre } </strong>
      </h3>
      <div>
        <img src={imagen.url} alt={nombre}/>
        <h4>Precio: $ { " " }  { precio } </h4>
      </div>
      <div>
        <Link
          id={_id}
          name={nombre}
          to={`/detalle-producto/${_id}`}
        >
            Detalle Producto
        </Link>
      </div>
    </div>
  )
}

export default Producto