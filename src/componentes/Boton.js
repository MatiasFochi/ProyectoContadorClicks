import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic, modoOscuro }){
  return(
    <button
      className={ esBotonDeClic ? 
                      modoOscuro ? 'boton-clic': 'boton-clic light-mode' 
                      : modoOscuro ? 'boton-reiniciar' : 'boton-reiniciar light-mode'}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;