import './App.css';
import Boton from './componentes/Boton';
import FreeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  //Arreglo que maneja el estado del contador
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);

  };

  const reinciarContador = () => {
    setNumClics(0);
  };

  const duplicarContador = () => {
    setNumClics(numClics * 2);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src = {FreeCodeCampLogo}
          alt = 'Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics = {numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Duplicar'
          esBotonDeClic={true}
          manejarClic={duplicarContador}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reinciarContador}
        />
      </div>
    </div>
  );
}

export default App;
