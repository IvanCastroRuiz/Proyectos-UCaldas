import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Swal from 'sweetalert2';

import useProductos from "../../hooks/useProductos";
import Navbar from "../../components/Navbar";
import EditarProductos from "./EditarProductos";

const DetalleProducto = () => {
  const param = useParams();
  const [modalEditar, setModalEditar] = useState(false);

  const { obtenerProducto, productoState, deleteProducto, eliminado, setEliminado } = useProductos();

  useEffect(() => {
    obtenerProducto(param.id);
  }, []);

  const handelClick = async (e) => {
    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn bg-red-600 rounded-md text-white text-center p-2 font-bold mx-2',
            cancelButton: 'btn bg-green-600 rounded-md text-white text-center p-2 font-bold mx-2'
        },
        buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
            title: 'Estas seguro?',
            text: "Estas accion no se podra revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {

          deleteProducto(param.id);

          swalWithBootstrapButtons.fire(
              'Eliminado!',
              'El Producto se elimino',
              'success'
          )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se elimino el Producto!!',
            'error'
            )
        }
        })
  };

  const { nombre, descripcion, precio, stock, image } = productoState;
  //console.log(image);
  return (
    <>
      <Navbar texto="Productos" ruta="" />
      <div
        className={`${
          modalEditar ? "h-0" : "h-5/6"
        } w-5/6 mb-4 min-sm:h-screen mx-auto overflow-hidden`}
      >
         {eliminado && <Navigate to="/productos"/>}
        <h1 className="font-bold text-6xl uppercase text-center w-full mx-auto mb-4 break-words	mt-24">
          Información del <span className="text-sky-700">producto</span>
        </h1>

        <div className="w-full px-10 py-2 md:px-20 md:py-5 lg:px-40 lg:py-10 border-2 shadow-lg mt-5">
          <div className="mb-9 flex justify-center">
            <img
              src={image ? `${image.url}` : ""}
              alt={nombre}
              className="h-56 w-96 border-2"
            />
          </div>
          <h1 className="text-4xl font-bold capitalize mb-9">{nombre}</h1>
          <p className="text-xl mb-9">{descripcion}</p>
          <div className="flex justify-around mb-3">
            <p className="text-xl font-semibold">
              Precio : $<span className="font-normal">{precio}</span>
            </p>
            <p className="text-xl font-semibold">
              Cantidad : <span className="font-normal">{stock}</span>
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-12 mb-4 flex-wrap">
            <button
              className="bg-blue-700 text-white p-2 text-xl uppercase rounded-md font-semibold hover:bg-blue-600 transition-colors w-full md:w-72 lg:w-80"
              onClick={(e) => setModalEditar(true)}
            >
              Editar
            </button>
            <button 
              className="bg-red-700 text-white p-2 text-xl uppercase rounded-md font-semibold hover:bg-red-600 transition-colors w-full md:w-72 lg:w-80"
              onClick={handelClick}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      {modalEditar && (
        <EditarProductos id={param.id} setModalEditar={setModalEditar} />
      )}
    </>
  );
};

export default DetalleProducto;