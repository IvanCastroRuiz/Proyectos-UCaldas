import { useState, useEffect, createContext } from "react";

import clienteAxios from "../config/axios";

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {

  const [productos, setProductos] = useState([]);
  const [productoState, setProductoState] = useState({});
  const [guardado, setGuardado] = useState(false);
  const [eliminado, setEliminado] = useState(false);
  const [editado, setEditado] = useState(false);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const { data } = await clienteAxios("/productos/get");
        setProductos(data);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    };
    obtenerProductos();
  }, [productos]);

  const submitProducto = async (formData) => {
    console.log(formData);
    try {
      const { data } = await clienteAxios.post(`/productos/create`, formData);
      setGuardado(true);
      setTimeout(() => {
        setGuardado(false);
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const obtenerProducto = async (id) => {
    try {
      const { data } = await clienteAxios(`/productos/get/${id}`);
      setProductoState(data);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  const deleteProducto = async (id) => {
    try {
      await clienteAxios.delete(`/productos/delete/${id}`);
      setEliminado(true);
      setTimeout(() => {
        setEliminado(false);
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateProductos = async (id, datos) => {
    try {
      const { data } = await clienteAxios.put(`/productos/update/${id}`, datos);
      setEditado(true);
      setTimeout(() => {
        setEditado(false);
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <ProductosContext.Provider
      value={{
        submitProducto,
        productos,
        productoState,
        obtenerProducto,
        guardado,
        setGuardado,
        deleteProducto,
        eliminado,
        setEliminado,
        updateProductos,
        editado,
        setEditado,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
export { ProductosProvider };
export default ProductosContext;
