import React from 'react'

const Articulo = ({producto}) => {

  const { _id, nombre, descripcion, precio, imagen  } = producto;

  return (
    <div key={producto._id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
                src={imagen.url}
                alt={nombre}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
       </div>

       <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {nombre}
                </a>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
            </div>
            <p className="text-sm font-medium text-gray-900">$ {precio}</p>
        </div>
    </div>
  )
}

export default Articulo