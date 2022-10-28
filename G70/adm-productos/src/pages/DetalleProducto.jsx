import React from 'react'
import { Link } from 'react-router-dom';

const DetalleProducto = () => {

  return (
    <div>
        DetalleProducto
        <div>
            <Link
                to="/productos"
            >
                Regresa a Listado de Productos
            </Link>
        </div>

    </div>
  )
}

export default DetalleProducto