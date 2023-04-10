//import { useState } from 'react'
//import './App.css'
import { PropTypes } from 'prop-types';

export const App = ({title, subtitle, name}) => {
  //const [count, setCount] = useState(0)
  //console.log(title);

  //if(!subtitle) throw new Error('Error: definir subtitulo');

  return (
    <>      
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>      
    </>
  )
};

App.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

App.defaultProps = {
  name: 'Juan Perez',
  //title: 'No hay titulo',
  subtitle: 'No hay subtitulo'
}
//export default App
