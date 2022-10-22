import { useState } from 'react'

import Alerta from './Alerta';

const Formulario = ({contactos,setContactos}) => {

  const [ alerta, setAlerta ] = useState({});
  
  const [ nombre, setNombre ] = useState(""); 
  const [ telefono, setTelefono ] = useState(""); 
  const [ correo, setCorreo ] = useState(""); 
  const [ mensaje, setMensaje ] = useState(""); 

  // Validar los datos

  const sincronizarStorage = (contactos) => {
    setContactos(contactos.push({
        nombre,
        telefono,
        correo,
        mensaje
    }));

    localStorage.setItem('contactos', JSON.stringify(contactos));

};  


  const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.id);

        // Validacion

        if([nombre,telefono,correo,mensaje].includes("")){
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            });
            return;
        }

        // Paso validacion 
        setAlerta({
            msg: "Informacion enviada de forma exitosa"
        });

        sincronizarStorage(contactos);


  };

  const { msg } = alerta;

  return (
    <form 
        id="form"
        className="formulario"
        onSubmit={handleSubmit}
    >
        <fieldset>
            <legend>Contactenos llenado todos los campos</legend>
            <div className="contenedor-campos">
                <div className="campos">
                    <label>Nombre</label>
                    <input 
                        id="nombre" 
                        name="nombre" 
                        type="text" 
                        placeholder="Tu nombre" 
                        className="input-text" 
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}    
                    />
                </div>
                <div className="campos">
                    <label>Telefono</label>
                    <input 
                        id="telefono" 
                        type="tel" 
                        placeholder="Tu telefono" 
                        className="input-text" 
                        value={telefono}
                        onChange={ e => setTelefono(e.target.value)}  
                    />
                </div>
                <div className="campos">
                    <label>Correo</label>
                    <input 
                        id="correo" 
                        type="email" 
                        placeholder="Tu Email" 
                        className="input-text" 
                        value={correo}
                        onChange={ e => setCorreo(e.target.value)} 
                    />
                </div>
                <div className="campos">
                    <label>Mensaje</label>
                    <textarea 
                        id="mensaje" 
                        placeholder="Tu mensaje" 
                        name="mensaje" 
                        className="input-text" 
                        value={mensaje}
                        onChange={ e => setMensaje(e.target.value)} 
                    />
                </div>
            </div>  
            <div id="contenedor-spinner">
            </div> 

            {/* Mostar Alerta */}

            {
                msg && 
                    <Alerta
                        alerta={alerta}
                        setAlerta={setAlerta}
                    />
            }

            <div className="alinear-derecha flex">
                <input 
                    className="boton w-100" 
                    type="submit" 
                    defaultValue="Enviar" 
                />
            </div>
        
        </fieldset>
        
    </form>
  )
}

export default Formulario