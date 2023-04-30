import '../styles-css/Testimonio.css';

function Testimonio(props) {
  return(
    <div className='testimonio-container'>
      <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt={`foto de ${props.sombra} `} />
      <div className='testimonio-text-container'>
        <p className='testimonio-name'><strong>{props.nombre}</strong> en {props.pais} </p>
        <p className='testimonio-charge'>{props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className='testimonio-text'>"{props.testimonio}" </p>
      </div>
    </div>
  );
}
  
export default Testimonio;