import { useContext } from "react";
import ProductosContext from "../context/ProductosProvider";

const useProductos = () => useContext(ProductosContext);

export default useProductos;
