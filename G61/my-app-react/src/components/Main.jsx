import {React,useState} from 'react'

const Main = () => {

 // Hooks useState
 const [spinner, setSpinner] = useState(false);

  const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Validando el Formulario'); 
       setSpinner(true);

       setTimeout(() => {
        setSpinner(false);
       }, 3000);
  };  
  
  return (
    <>
        <main className="contenedor sombra">
            <section id="section-form">   
                <h2>Contactos</h2>
                <form
                    className="formulario"
                >
                    <fieldset>
                            <legend>Contactenos llenado todos los campos</legend>
                            <div className="contenedor-campos">
                                <div className="campos">
                                    <label>Cedula</label>
                                    <input id="cedula" name="cedula" type="number" placeholder="Tu Cedula" className="input-text" />
                                </div>
                                <div className="campos">
                                    <label>Nombre</label>
                                    <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" className="input-text" />
                                </div>
                                <div className="campos">
                                    <label>Telefono</label>
                                    <input id="telefono" type="tel" placeholder="Tu telefono" className="input-text" />
                                </div>
                                <div className="campos">
                                    <label>Correo</label>
                                    <input id="correo" type="email" placeholder="Tu Email" className="input-text" />
                                </div>
                                <div className="campos">
                                    <label>Mensaje</label>
                                    <textarea id="mensaje" name="mensaje" className="input-text" placeholder="Tu mensaje"></textarea>
                                </div>
                            </div>  
                            
                            {/* <!-- Spinner --> */}
                            <div id="contenedor-spinner">
                                {/* Operador Ternerio */}
                                {
                                    spinner 
                                        ?
                                            <div className="spinner">
                                                <div className="rect1"></div>
                                                <div className="rect2"></div>
                                                <div className="rect3"></div>
                                                <div className="rect4"></div>
                                                <div className="rect5"></div>
                                            </div>
                                        :
                                        <div></div>
                                }     
                        
                            </div>

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
        </main>
    </>
  )
}

export default Main