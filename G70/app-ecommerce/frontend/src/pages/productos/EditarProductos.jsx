import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { Navigate  } from 'react-router-dom';
import useProductos from "../../hooks/useProductos";


const EditarProductos = ({ id, setModalEditar }) => {

  const { register, handleSubmit } = useForm();
  
  const { obtenerProducto, productoState, eliminado, updateProductos, setProductoState, editado } = useProductos();

  useEffect(() => {
    obtenerProducto(id);
  }, []);

  const { _id, nombre, description, precio, stock, image } = productoState;

  //console.log(_id, nombre, description, typeof(precio), stock);

  const onSubmit = async (datos) => {

    //console.log(datos.precio);

    Swal.fire({
      title: 'Quieres guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No Guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        const formData = new FormData();
        formData.append("id", id);
        formData.append("image", datos.file[0]);
        formData.append("nombre", datos.nombre);
        formData.append("description", datos.description);
        formData.append("precio", datos.precio);
        formData.append("stock", datos.stock);

        updateProductos(_id, formData);
        Swal.fire('Guardado!', '', 'success')

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tu Producto ha sido guardado.',
          showConfirmButton: false,
          timer: 1500
        })

      } else if (result.isDenied) {
        Swal.fire('Los cambios no se guardaron', '', 'info')
      }
    })
  };


  return (
    <div className="flex justify-center bg-slate-500 absolute w-full h-screen top-0 bg-opacity-60 mt-24">
      {eliminado && <Navigate to="/productos"/>}
      {editado && <Navigate to="/productos"/>}
      <div className="h-full w-5/6">
        <div className="w-full py-5 flex items-center h-full mt-24">
          <form 
            className="px-5 mx-auto py-5 sm:px-9 sm:w-5/6 md:w-4/5 lg:w-3/4 shadow-lg bg-white rounded-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button
              onClick={(e) => setModalEditar(false)}
              className="text-black font-bold bg-white text-xl p-4 flex float-right hover:scale-110 "
            >
              X
            </button>

            <h1 className="font-bold text-6xl uppercase text-center w-full mx-auto">
              Edita tu <span className="text-sky-700">producto</span>
            </h1>

            
            <div className="mb-9 flex justify-center">
              <img
                src={image ? `${image.url}` : ""}
                alt={nombre}
                className="h-56 w-96 border-2"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="nombre" className="font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="ej: Desinfectante"
                value={nombre || ''}
                onChange={ e => setProductoState({
                  ...productoState, 
                  [e.target.name] : e.target.value
                })}
                {...register("nombre")}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="descripcion" className="font-medium">
                Descripcion
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100 h-52"
                placeholder="..."
                value={description || ''}
                onChange={ e => setProductoState({
                  ...productoState, 
                  [e.target.name] : e.target.value
                })}
                {...register("description")}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="precio" className="font-medium">
                Precio
              </label>
              <div className="flex items-center">
                <span className="font-bold text-xl mr-2">$</span>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  className="placeholder-slate-400 p-2 w-full bg-slate-100"
                  placeholder="ej: 200000"
                  value={precio || ''}
                  onChange={ e => setProductoState({
                    ...productoState, 
                    [e.target.name] : e.target.value
                  })}
                  {...register("precio")}
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="stock" className="font-medium">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="ej: 5"
                value={stock || ''}
                  onChange={ e => setProductoState({
                    ...productoState, 
                    [e.target.name] : e.target.value
                  })}
                  {...register("stock")}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="stock" className="font-medium">
                Imagen
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                {...register("file")}
              />
            </div>
            <input
              type="submit"
              value="Guardar"
              className="font-medium uppercase bg-sky-700 text-white p-2 rounded-md w-full cursor-pointer hover:bg-sky-500"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarProductos;