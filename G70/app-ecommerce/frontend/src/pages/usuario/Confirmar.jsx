// import { Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";

import imagenConfirmar from "../../assets/imagen-confirmacion.png";

const Confirmar = () => {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { id } = params;
  // console.log(id);
  let token = id;
  //console.log(token);

  useEffect(() => {
    
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${token}`;
        const { data } = await clienteAxios(url);
        //const { data } = await clienteAxios( `/usuarios/prueba`);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
        });
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
      setCargando(false);
    };
    confirmarCuenta();
  }, []);
  // const navigate = useNavigate()
  // const volverInicio = () => navigate('/')
  // setTimeout(()=>{
  // volverInicio()
  // }, 4000)
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col justify-center items-center lg:w-2/4 md:flex-row mx-auto">
        <h1 className="font-bold text-6xl uppercase text-center md:w-2/3 mx-auto">
          Confirma tu cuenta y Comienza a Disfrutar{" "}
          <span className="text-sky-700">De Nuestros Productos</span>
        </h1>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          {!cargando && <Alerta alerta={alerta} />}
          {cuentaConfirmada && (
            <Link className="block text-center my-5 text-gray-500" to="/">
              Iniciar Sesion
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Confirmar;
