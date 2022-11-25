import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../assets/logo-empresa.png";
import svg60 from "../assets/svg/icons8-menu-30.svg";

const Navbar = ({ texto, ruta, id, perfil }) => {

  const { cerrarSesion } = useAuth();

  const [ver, setVer] = useState(false);

  const mostrarBarra = (n) => (ver ? setVer(false) : setVer(true));

  return (
    <nav className="shadow bg-slate-100 mb-5 flex fixed z-10 w-full top-0">
      <div className="max-md:hidden w-full flex justify-between px-5 items-center gap-2">
        <img src={logo} alt="logo empresa" className="w-50 h-20" />
        <input
          type="search"
          placeholder="Buscar Producto"
          className="my-3 p-3 h-10 rounded-lg w-1/2 border-2"
        />
        <div className="flex gap-3">
          {/* {!venta && (
<button type="button" className="hover:scale-110 text-black p-2 flex items-center cursor-pointer font-medium hover:border-b-blue-500 hover:border-b-2 transition-all" onClick={mostrarAside}>
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-6 h-6"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
</svg>
</button>)} */}
          {!perfil && (
            <button type="button" className="hover:scale-110 transition-all">
              <Link
                to={`/perfil`}
                className="text-black p-2 w-full flex cursor-pointer font-medium hover:border-b-blue-500 hover:border-b-2 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </button>
          )}
          <button
            type="button"
            className="hover:scale-110 transition-all hover:border-b-2 hover:border-b-blue-500"
          >
            <Link
              to={`/productos/${ruta}`}
              className="uppercase text-black p-2 w-full cursor-pointer font-medium transition-all"
            >
              {texto}
            </Link>
          </button>
          <button
            type="button"
            className="bg-sky-700 text-white rounded-lg uppercase font-medium hover:bg-sky-500 transition-colors"
            onClick={cerrarSesion}
          >
            <Link to={"/"} className="p-2 text-center w-full flex">
              Cerrar Sesion
            </Link>
          </button>
        </div>
      </div>
      <div className="md:hidden w-full flex justify-between px-5 items-center overflow-hidden z-10">
        <img src={logo} alt="logo empresa" className="w-50 h-20" />
        <button onClick={mostrarBarra}>
          <img src={svg60} alt="menu hamburguesa" />
        </button>
        {ver && (
          <div className="flex flex-col gap-3 absolute top-20 left-0 w-full bg-slate-100 p-4 justify-between">
            <input
              type="search"
              placeholder="Buscar Producto"
              className="my-3 p-3 h-10 rounded-lg border-2"
            />
            {/* {!venta && (
<button type="button" className="gap-2 text-black p-2 flex justify-center cursor-pointer font-medium hover:border-b-blue-500 hover:border-b-2 bg-slate-200 transition-all" onClick={mostrarAside}>
<p>Carrito de Compras</p>
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-6 h-6"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
</svg>
</button>
)} */}
            {!perfil && (
              <button type="button">
                <Link
                  to={`/perfil`}
                  className="gap-2 text-black p-2 w-full flex justify-center cursor-pointer font-medium hover:border-b-blue-500 hover:border-b-2 bg-slate-200 transition-all"
                >
                  Perfil
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </Link>
              </button>
            )}
            <button type="button">
              <Link
                to={`/productos/${ruta}`}
                className="gap-2 text-black p-2 w-full flex justify-center cursor-pointer font-medium hover:border-b-blue-500 hover:border-b-2 bg-slate-200 transition-all"
              >
                {texto}
              </Link>
            </button>
            <button
              type="button"
              className="bg-sky-700 text-white rounded-lg uppercase font-medium hover:bg-sky-500 transition-colors"
            >
              <Link
                to={"/"}
                className="p-2 w-full flex justify-center"
                onClick={cerrarSesion}
              >
                Cerrar Sesion
              </Link>
            </button>
          </div>
        )}
      </div>
      {/* <AsideVenta verAside={asideVentas} setAsideVentas={setAsideVentas}/> */}
    </nav>
  );
};
export default Navbar;
