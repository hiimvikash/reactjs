import { useState } from 'react'

import './App.css'


function App() {

  let [counter, setCounter] = useState(12);

  function addCount(){
    setCounter(counter+1);
  }
  function subCount(){
    if(counter > 0)
      setCounter(counter-1);
  }

  return (
    <>
    <h2>Count is {counter}</h2>
    <button onClick={addCount}>increase {counter}</button>
    <button onClick={subCount}>decrease {counter}</button>
    </>
  )
}

export default App
