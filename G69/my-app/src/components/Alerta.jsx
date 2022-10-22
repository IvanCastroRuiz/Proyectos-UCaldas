import React from 'react'

const Alerta = ({alerta, setAlerta}) => {

 setTimeout(()=>{
    setAlerta({})
 },3000)   


  return (
    <div className={ ` ${alerta.error ? 'error' : 'correcto' } ` }  >
        {alerta.msg}
    </div>
  )
}

export default Alerta