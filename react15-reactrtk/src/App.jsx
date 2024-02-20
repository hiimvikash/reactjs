import { useState } from 'react'
import './App.css'
import CakeView from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
function App() {


  return (
    <>
    <h1>Get one icecream free on Ordering Cake</h1>
     <CakeView />
     <IcecreamView/>
    </>
  )
}

export default App
