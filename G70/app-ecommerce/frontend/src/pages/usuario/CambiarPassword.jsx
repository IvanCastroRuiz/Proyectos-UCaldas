import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../../components/Alerta";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";
const CambiarPassword = () => {
  const { guardarPassword } = useAuth();
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    pwd_actual: "",
    pwd_nuevo: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (password.pwd_nuevo.length < 6) {
      setAlerta({
        msg: "El Password debe tener mínimo 6 caracteres",
        error: true,
      });
      return;
    }
    const respuesta = await guardarPassword(password);
    setAlerta(respuesta);
  };
  const { msg } = alerta;
  return (
    <>
      <Navbar texto="Productos" ruta="" />
      <div className=" w-full h-5/6">
        <div className="w-full flex flex-col">
          <h1 className="font-bold text-6xl uppercase text-center w-full mx-auto">
            Cambia tu <span className="text-sky-700">contraseña</span>
          </h1>
          <div className="mx-auto my-5">
            <button className="hover:scale-110 transition-all">
              {/* CAMBIAR EL ID DE LA RUTA A ENVIAR */}
              <Link
                to="/perfil"
                className="uppercase bg-white text-black p-2 w-full cursor-pointer font-medium hover:border-b-blue-500 hover:border-b-2 hover:scale-110 transition-all "
              >
                - perfil -
              </Link>
            </button>
          </div>
          {msg && <Alerta alerta={alerta} setAlerta={setAlerta} />}
          <form
            className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label htmlFor="password" className="font-medium">
                Password Actual
              </label>
              <input
                type="password"
                name="pwd_actual"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="'Escribe tu password actual"
                onChange={(e) =>
                  setPassword({
                    ...password,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirpassword" className="font-medium">
                Password Nuevo
              </label>
              <input
                type="password"
                name="pwd_nuevo"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="Escribe tu nuevo password"
                onChange={(e) =>
                  setPassword({
                    ...password,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="submit"
              value="Actualizar Password"
              className="uppercase bg-sky-700 text-white p-2 rounded-md w-full cursor-pointer font-medium hover:bg-sky-500 transition-colors"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default CambiarPassword;
