import {  useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../../config/axios';

import Alerta from '../../components/Alerta';

import imagenRegistro from '../../assets/imagen-registro.png'
import cajaCarton from '../../assets/caja-de-carton.png'

const Registro = () => {


    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ repetirPassword, setRepetirPassword ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ direccion, setDireccion ] = useState('');
    const [ web, setWeb ] = useState('');


    const [ alerta, setAlerta ] = useState({});


    const handleSudmit = async (e) =>{
        e.preventDefault();
    
        if([nombre, email, password,telefono, repetirPassword].includes('')){
          setAlerta({msg: "Hay campos vacios", error: true});
          return;
        };
    
        if(password !== repetirPassword){
          setAlerta({msg: "Los password no son iguales", error: true});
          return;
        }
    
        if(password.length < 6){
          setAlerta({msg: "El password es muy corto, agrega minimo 6 caracteres", error: true});
          return;
        }
    
        setAlerta({});
    
          // Creando el usuario en la API
          
          try {
            
            const {data} = await clienteAxios.post('/usuarios', { nombre, email, password, telefono, direccion, web } );
            //const {data} = await clienteAxios('/usuarios/prueba');

            console.log(data);

            setAlerta({
                msg: "Creado correctamente, revisa tu email", 
                error: false
            });
    
            setNombre("");
            setEmail("");
            setPassword("");
            setRepetirPassword("");
            setTelefono("");
            setDireccion("");
            setWeb("");
    
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    };
    
    const { msg } = alerta;

    return (
        <div className='flex w-full'>
            <div className='flex flex-col justify-center items-center lg:w-2/4 mr-10 md:flex-row '>
                <img src={cajaCarton} alt="imagen" className='relative w-0 md:w-1/2 lg:w-0 sm:w-0' />
                <div>
                    <h1 className='font-bold text-6xl uppercase text-center md:w-2/3 mx-auto'>Registrate y disfruta de los <span className='text-sky-700'>productos</span></h1>
                        { msg &&  <Alerta 
                                alerta={alerta}
                            />
                        }  
                    <form 
                        onSubmit={handleSudmit}
                        className='p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md'
                    >
                        <div className='mb-5'>
                            <label htmlFor="nombre" className='font-medium'>Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                className='block placeholder-slate-400 p-2 w-full bg-slate-100' 
                                placeholder='ej: Juan David Ariza Torres' 
                                value={nombre}
                                onChange={ e => setNombre(e.target.value) }
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="email" className='font-medium'>Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className='block placeholder-slate-400 p-2 w-full bg-slate-100' 
                                placeholder='ej: correo@correo.com' 
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="telefono" className='font-medium'>Telefono</label>
                            <input 
                                type="number" 
                                id="telefono" 
                                className='block placeholder-slate-400 p-2 w-full bg-slate-100' 
                                placeholder='ej: 300123456' 
                                value={telefono}
                                onChange={ e => setTelefono(e.target.value) }
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="direccion" className='font-medium'>Direccion</label>
                            <input 
                                type="text" 
                                id="direccion" 
                                className='block placeholder-slate-400 p-2 w-full bg-slate-100' 
                                placeholder='ej: Calle 12 #34-56' 
                                value={direccion}
                                onChange={ e => setDireccion(e.target.value) }
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="web" className='font-medium'>Direccion</label>
                            <input 
                                type="text" 
                                id="web" 
                                className='block placeholder-slate-400 p-2 w-full bg-slate-100' 
                                placeholder='https://github.com/IvanCastroRuiz' 
                                value={web}
                                onChange={ e => setWeb(e.target.value) }
                            />
                        </div>                        
                        <div className='mb-5'>
                            <label htmlFor="password" className='font-medium'>Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className='block placeholder-slate-400 p-2 w-full bg-slate-100' 
                                placeholder='*********' 
                                value={password}
                                onChange={ e => setPassword(e.target.value) }
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="repitepassword" className='font-medium'>Repite tu Password</label>
                            <input 
                                type="password" 
                                id="repitepassword" 
                                className='block placeholder-slate-400 p-2 w-full bg-slate-100' 
                                placeholder='*********' 
                                value={repetirPassword}
                                onChange={ e => setRepetirPassword(e.target.value) }
                            />
                        </div>

                        <input type="submit" value="Crear Cuenta" className='uppercase bg-sky-700 text-white p-2 rounded-md w-full' />

                        <div className='flex justify-between px-4 mt-5 text-slate-500 '>
                            <Link to="/" className=''>Ya tengo cuenta.</Link>
                            <Link to="/olvide-password">Olvide mi password.</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='h-full w-0  lg:w-full'>
                <img src={imagenRegistro} alt="imagen login" className='h-screen w-screen' />

            </div>
        </div>
    )
}

export default Registro