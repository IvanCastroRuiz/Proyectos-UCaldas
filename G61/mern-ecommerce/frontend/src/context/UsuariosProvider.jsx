import { createContext, useState, useEffect } from 'react';

import clienteAxios from '../config/axios';

const UsuariosContext = createContext();

const UsuariosProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) return;
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                };
                const { data } = await clienteAxios('/usuarios/lista-usuarios', config);
                setUsuarios(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerUsuarios();
    }, []);

    const guardarUsuario = async (usuario) => {
        console.log(usuario)
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        if (usuario.id) {
            try {
                const { data } = await clienteAxios.put(`/usuarios/${usuario.id}`, usuario, config);
                console.log(data);
                const usuariosActualizados = usuarios.map(usuarioState => usuarioState._id === data._id ? data : usuarioState);
                setUsuarios(usuariosActualizados);
            } catch (error) {
                console.log(error.message);
            }
        } else {
            try {
                const { data } = await clienteAxios.post('/usuarios', usuario, config)
                console.log(data)
                const { createdAt, updatedAt, __v, ...usuarioAlmacenado } = data
                setUsuarios([usuarioAlmacenado, ...usuarios]);
            } catch (error) {
                console.log(error.response.data.msg);
            }
        }
    };

    const setEdicion = (usuario) => {
        setUsuario(usuario);
    };

    const eliminarUsuario = async (id) => {
        const confirmar = confirm('¿Confirmas que deseas eliminar?');
        if (confirmar) {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.delete(`/usuarios/${id}`, config);
                const usuariosActualizados = usuarios.filter(usuarioState => usuarioState._id !== id);
                setUsuarios(usuariosActualizados);
            } catch (error) {
                console.log(error);
            }
        };
    };
    
    return (
        <UsuariosContext.Provider
            value={{
                usuarios,
                guardarUsuario,
                setEdicion,
                usuario,
                eliminarUsuario
            }}
        >
            {children}
        </UsuariosContext.Provider>
    );
}
export {
    UsuariosProvider
}
export default UsuariosContext;