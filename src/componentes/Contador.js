import '../hojas-de-estilo/Contador.css';

function Contador({ numClics, modoOscuro}){
  return(
    <div className={(modoOscuro)? 'contador' : 'contador light-mode'}>
      {numClics}
    </div>
  );
}

export default Contador;