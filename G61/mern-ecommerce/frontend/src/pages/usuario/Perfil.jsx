import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import Alerta from "../../components/Alerta";
import Navbar from "../../components/Navbar";

const Perfil = () => {

    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
        setPerfil(auth.usuario)
        console.log(auth);
    }, [auth])

    const [verVerfil, setVerPerfil] = useState(false);

    useEffect(() => setVerPerfil(true), [])

    const handleSubmit = async e => {
        e.preventDefault()
        const { nombre, email } = perfil
        if ([nombre, email].includes('')) {
            setAlerta({
                msg: 'Email y Nombre son obligatorios',
                error: true
            })
            return
        }
        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado)
    }
    const { msg } = alerta
    return (
        <>
            <Navbar texto="Productos" ruta="" perfil={verVerfil} />
            
            <div className=" w-full h-5/6">
                <div className="w-full flex flex-col">
                    <h1 className="font-bold text-6xl uppercase text-center w-full mx-auto">
                        Edita tu <span className="text-sky-700">Perfil</span>
                    </h1>
                    <div className="mx-auto my-5">
                        <button className="hover:scale-110 transition-all">
                            {/* CAMBIAR EL ID DE LA RUTA A ENVIAR */}
                            <Link
                                to="/perfil/cambiar-password"
                                className="uppercase bg-white text-black p-2 w-full cursor-pointer font-medium hover:border-b-blue-500 hover:border-b-2 hover:scale-110 transition-all "
                            >
                                - Cambiar Contraseña -
                            </Link>
                        </button>
                    </div>
                    {msg && <Alerta alerta={alerta} />}
                    <form
                        className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-5">
                            <label htmlFor="nombre" className="font-medium">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                                placeholder="ej: Juan David Ariza Torres"
                                value={perfil.nombre || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                                placeholder="ej: correo@correo.com"
                                value={perfil.email || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="direccion" className="font-medium">
                                Direccion
                            </label>
                            <input
                                type="text"
                                id="direccion"
                                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                                placeholder="ej: Calle 12 #34-56"
                                value={perfil.direccion || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="web" className="font-medium">
                                Web
                            </label>
                            <input
                                type="text"
                                id="web"
                                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                                placeholder="ej: www.MiWebSite.com"
                                value={perfil.web || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="telefono" className="font-medium">
                                Telefono
                            </label>
                            <input
                                type="number"
                                id="telefono"
                                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                                placeholder="ej: 300123456"
                                value={perfil.telefono || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <input
                            type="submit"
                            value="editar"
                            className="uppercase bg-sky-700 text-white p-2 rounded-md w-full cursor-pointer font-medium hover:bg-sky-500 transition-colors"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};
export default Perfil;