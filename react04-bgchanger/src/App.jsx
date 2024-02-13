import Btn from './Button';
import './App.css'
import { useState } from 'react'

function App() {
  let[color, setColor] = useState("white");

  return (
    <div className='main' style={{backgroundColor : color, width:"100vw"}}>
      <div className="footer">
        <Btn color = "red" setColor = {setColor}/>
        <Btn color = "yellow" setColor = {setColor}/>
        <Btn color = "green" setColor = {setColor}/>
        <Btn color = "blue" setColor = {setColor}/>
        <Btn color = "violet" setColor = {setColor}/>
        <Btn color = "purple" setColor = {setColor}/>
        <Btn color = "black" setColor = {setColor}/>
      </div>
    </div>
  )
}


export default App
