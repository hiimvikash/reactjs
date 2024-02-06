# 01. Hello World App
```js
//-------------------------------------------------------01. Hello World App-------------------------------------------------------------

// -----App.jsx START

function App1() {
  const user = "Vikash";
  return (
    <>
      <h1>I am App1 {user}</h1>
    </>
  )
}
function App2() {
  
  return (
    <>
      <h1>I am App2</h1>
    </>
  )
}

export {App1, App2}
// -----App.jsx END

// ------Main.jsx START

import React from 'react'
import ReactDOM from 'react-dom/client'
import {App1, App2} from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App1/>
    <App2/>
  </>
)

// ------Main.jsx END
```
# 02. Counter App
```js
//-------------------------------------------------------02. counter-app----------------------------------------------------------------

// App.jsx START

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
// App.jsx END
```
![image](https://github.com/hiimvikash/Namaste-React/assets/71629248/623ec7be-4737-4cd1-94ed-bedd79e1daf7)

# 03. React Props
```js
//---------------------------------------------------------03-React Props-------------------------------------------------------------

// App.jsx START

import Card from './Card'
import './App.css'


function App() {

 const myArr = [1,2,3];

 let expiry = 2030;

 const laptopinfo = {
  modelname : "Honor Magic Book L0312", 
  mfc : 2018, 
  color : "steel grey"
 }

  return (
    <>
      <h1 className='bg-green-900 text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>

      {/* Every Card will take diff info for itself so we will be using props */}
      <Card btnText="read-more"device="Honor Laptop" expiry= {expiry} arr={myArr} laptopinfo ={laptopinfo}/>
      <Card/>
    </>
  )
}

export default App;

// App.jsx END


//Card.jsx START

import React from 'react'

function Card({btnText: bt = "read-default", device:dn = "Default Laptop", arr, expiry=9999}) {
    // console.log(props);
    console.log(dn);
    console.log(expiry);
    console.log(arr);
  

  return (
    <div className="w-[300px] rounded-md border mb-5">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">About {dn}</h1>
        <p className="mt-3 text-sm text-gray-600">
          <b>{expiry}</b> ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {bt}
        </button>
      </div>
    </div>
  )
}

export default Card

//Card.jsx END
```

# 04. bg-Changer App

```js
// App.jsx START
import Btn from './Button';
import './App.css'
import { useState } from 'react'

function App() {
  let[color, setColor] = useState("white");

  return (
    <div className='main' style={{backgroundColor : color,  width:"100vw"}}>
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
// App.jsx END

// Button.jsx START

export default function Btn({color, setColor}){

    const btnstyle = {
        fontSize : "18px",
        padding : "0.5em",
        width : "5em",
        borderRadius : "10px",
        backgroundColor : color,
        color: "white",
        border : "none"
    }
    function changeColor(){
      setColor(color);
    }
    return(
        <button style={btnstyle} onClick={changeColor}>{color}</button>
    )
}
// Button.jsx END



// App.css START
*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

.main{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  transition: all 0.5s;
}
.footer{
  width : 40%;
  background-color: rgb(54, 100, 100);
  padding: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  border-radius: 10px;
}
// App.css END
```

# [05.State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
