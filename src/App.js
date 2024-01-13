import './App.css';
import Boton from './componentes/Boton';
import LogoClaro from './imagenes/LogoPersonalBlanco2.png';
import LogoOscuro from './imagenes/LogoPersonal2.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  //Arreglo que maneja el estado del contador
  const [numClics, setNumClics] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  const manejarClic = () => {
    setNumClics(numClics + 1);

  };

  const reinciarContador = () => {
    setNumClics(0);
  };

  const cambioModo = () => {
    if(darkMode){
      setDarkMode(false);
    }
    else{
      setDarkMode(true);
    }
  };

//{(darkMode)?"":" light-mode"}
//''
  return (
    <div className={(darkMode)?"App":"App light-mode"}>
      <div className='Change'>
        <button className={(darkMode)?"boton-change":"boton-change light-mode"} onClick={cambioModo} >
          {(darkMode) ? "Dark mode" : "Light mode"}
        </button>
      </div>
      <div className='logo-contenedor'>
        <a className='logo-contenedor-2' href="https://www.linkedin.com/in/matias-fochi/" target='_blank' rel='noreferrer'>
          <img  className='logo' src = {LogoClaro} alt = 'Logo oscuro Matias Fochi' style={{opacity: darkMode ? 1 : 0, transition: 'opacity 1s'}} />
          <img  className='logo' src = {LogoOscuro} alt = 'Logo oscuro Matias Fochi' style={{opacity: darkMode ? 0 : 1, transition: 'opacity 1s'}} />
        </a>
      </div>
      <div className='contenedor-principal' >
        <Contador 
          modoOscuro = {darkMode}
          numClics = {numClics} />
        <Boton
          modoOscuro = {darkMode}
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          modoOscuro = {darkMode}
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reinciarContador}
        />
      </div>
    </div>
  );
}

export default App;
