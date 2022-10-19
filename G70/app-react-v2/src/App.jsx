import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header';
import './App.css'

function App() {
  const [saludar, setSaludar] = useState(false);

  const handelSumidt = () => {
    setSaludar(!saludar);
  };

  return (
    <div className="App">

      <Header/>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Fragment <> */}
       
         { saludar 
            ? 
              <div> Introduccion a ReacJS </div> 
            : 
              <div> Aprendiendo a ReacJS </div>
         } 

         <button
            onClick={handelSumidt}
         >
            Bienvenida
         </button>
      
    </div>
  )
}

export default App
