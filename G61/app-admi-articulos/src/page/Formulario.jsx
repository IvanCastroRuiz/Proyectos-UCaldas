import {React,useState} from 'react'

import Alerta from '../components/Alerta';
import Spinner from '../components/Spinner';

const Formulario = () => {

 // Hooks useState
    const [spinner, setSpinner] = useState(false);
    const [alerta, setAlerta] = useState({});

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const [ contactos, setContactos] = useState(
        localStorage.getItem("contactos")
                    ?
                        JSON.parse(localStorage.getItem("contactos"))
                    :
                        []
    );

  const sincronizarStorage = (contactos) => {

    const datos = {
        "nombre": nombre,
        "telefono": telefono,
        "correo": correo,
        "mensaje": mensaje
    }

    contactos.push(datos);
    localStorage.setItem("contactos", JSON.stringify(contactos))
    if(contactos){
      setContactos(contactos)
    }

  };      

  const handleSubmit = (e) => {
       e.preventDefault();

       // Validar los datos

       if([nombre,telefono,correo,mensaje].includes("")){
            setAlerta({
                msg :"Todos los campos son obligatorios",    
                error: true
            });
            return;
       };

       // Paso la validacion
       setSpinner(true);
       setAlerta({
            msg :"Su informacion fue registrada con exito"
       });

       sincronizarStorage(contactos);

       // Resetear los campos del contacto
       setNombre("");
       setTelefono("");
       setCorreo("");
       setMensaje("");

  };  
  
  const { msg } = alerta;

  return (
    <>
        <section id="section-form">   
            <h2>Contactos</h2>
            <form
                className="formulario"
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
                                    onChange={e => setNombre(e.target.value)}
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
                                    onChange={e => setTelefono(e.target.value)}
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
                                    onChange={e => setCorreo(e.target.value)}
                                />
                            </div>
                            <div className="campos">
                                <label>Mensaje</label>
                                <textarea 
                                    id="mensaje" 
                                    name="mensaje" 
                                    className="input-text" 
                                    placeholder="Tu mensaje"
                                    value={mensaje}
                                    onChange={e => setMensaje(e.target.value)}
                                    >
                                </textarea>
                            </div>
                        </div>  
                        
                        {/* <!-- Spinner --> */}
                        <div id="contenedor-spinner">
                            {/* Operador Ternerio */}
                            {
                                spinner 
                                    &&
                                        <Spinner
                                            spinner={spinner}
                                            setSpinner={setSpinner}
                                        />
                            }     
                    
                        </div>
                        {/* Operadores ternarios */}
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
                                value="Enviar" 
                                onClick={handleSubmit}
                            />
                        </div>
                </fieldset>
                    {/* <!--  --> */}
            </form>
        </section>
    </>
  )
}

export default Formulario