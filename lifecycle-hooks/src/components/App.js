import { useState } from 'react';
import './App.css'
import Counter from './Counter/Counter';
import Timer from './Timer/Timer';

function App() {

  const [show, setShow] = useState(true)

  const toggleCounterShow = () => setShow(!show)



  return (
    <div className="App">

      <button onClick={toggleCounterShow}>{show ? 'ocultar' : 'mostrar'}</button>

      {show && <Counter />}
      {show && <Timer />}

    </div>
  )
}
export default App;
