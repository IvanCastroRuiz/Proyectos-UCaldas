import { Navigate  } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

import useProductos from "../../hooks/useProductos";

import Navbar from "../../components/Navbar";
import Alerta from '../../components/Alerta';

const FormularioProductos = () => {

  const { register, handleSubmit } = useForm();
  const { submitProducto, guardado } = useProductos();

  const onSubmit = (datos) => {
    //e.preventDefault();

    const formData = new FormData();

    formData.append("image", datos.file[0]);
    formData.append("nombre", datos.nombre);
    formData.append("description", datos.description);
    formData.append("precio", datos.precio);
    formData.append("stock", datos.stock);
    
    submitProducto(formData);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu Producto ha sido guardado.',
      showConfirmButton: false,
      timer: 1500
    })

  };

  return (
    <>
      <Navbar texto="Productos" ruta="" />
      <div className=" w-full justify-center h-5/6 items-center mt-24">
        {guardado && <Navigate to="/productos"/>} 
        <div className="w-full">
          <h1 className="font-bold text-6xl uppercase text-center w-full mx-auto">
            Registra tus <span className="text-sky-700">productos</span>
          </h1>

          <form
            className="px-5 mx-auto py-5 sm:px-9 sm:w-5/6 md:w-4/5 lg:w-3/4 shadow-lg bg-white rounded-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-5">
              <label htmlFor="nombre" className="font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="Nombre Producto"
                {...register("nombre", { required: true })}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="descripcion" className="font-medium">
                Descripcion
              </label>
              <textarea
                type="text"
                id="descripcion"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100 h-52"
                placeholder="Descripcion Productos"
                {...register("description", { required: true })}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="precio" className="font-medium">
                Precio
              </label>
              <input
                type="number"
                id="precio"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="Precio Producto"
                {...register("precio", { required: true })}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="stock" className="font-medium">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="Stock Producto"
                {...register("stock", { required: true })}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="stock" className="font-medium">
                Imagen
              </label>
              <input
                type="file"
                id="image"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                {...register("file")} 
              />
            </div>
            <input
              type="submit"
              value="Guardar"
              className="uppercase bg-sky-700 text-white p-2 rounded-md w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioProductos;