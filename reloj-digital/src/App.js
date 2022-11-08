import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Button from './components/buttom';
import Digito from './components/digito';
import Separador from './components/separador';
import getTime from './getTime';
//import Separador from './components/separador';

function App() {
  const [time, changeTime] = useState({})
  useEffect(function () {
    setInterval(() => {
      changeTime(getTime());
    }, 1000);
  }, []);
  const [estilo, setEstilo] = useState('rectangle')
  const changeEstilo = estile => {
    setEstilo(estile)
  }


  return (
    <div className="App">
      <div className={`contenedor-${estilo}`}>
        <Digito text={time.horas} />
        <Separador />
        <Digito text={time.minutos} />
        <Separador />
        <Digito text={time.segundos} />
      </div>
      <div className='contenedor-botones'>
        <Button changeEstilo={changeEstilo} estilo='circle' />
        <Button changeEstilo={changeEstilo} estilo='rectangle' />
      </div>
    </div>
  );
}

export default App;
