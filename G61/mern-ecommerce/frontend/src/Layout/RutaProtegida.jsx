import  { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from '../components/Navbar'


const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  
  console.log(auth)

  if(cargando) return 'cargando...'

  return (
    <div className="h-full">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  )
}

export default RutaProtegida