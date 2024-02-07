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

# 05.Little Concept to read : 
- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [State as a snapshot](https://react.dev/learn/state-as-a-snapshot)
- [useState()](https://react.dev/reference/react/useState)
# 06.useEffect() : whenever there is changed in dependencies CB fun inside useEffect() is called
- useEffect Hook: useEffect is a built-in React Hook used for handling side effects in functional components. Side effects may include data fetching, subscriptions, or manually changing the DOM.
- It accepts a function as its first argument and an optional array of dependencies as its second argument.
- The function represents the side effect to perform. The dependency array specifies when the effect should be executed based on changes in specific values.
- This side effect will now run on every single render of the component
- ```js
  useEffect(() => {
  console.log("This is a side effect")})
  ```
- If the dependency array is empty, the effect runs only once, after the initial render.

  
```js
import { useState, useEffect } from 'react'


function App() {

  let [resourceType, setResourceType] = useState('posts');
  let [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(res=>res.json())
    .then(json=>setItems(json))

  }, [resourceType])

  return (
    <>
      <button onClick={()=> setResourceType('posts')}>posts</button>
      <button onClick={()=> setResourceType('users')}>users</button>
      <button onClick={()=> setResourceType('comments')}>comments</button>
      <h1>{resourceType}</h1>

      {
        items.map(item => <pre>{JSON.stringify(item)}</pre>)
      }
    </>
    
  )
}

export default App
```

# 07. useRef() hook

- Concept:
  - useRef is a built-in React Hook that allows you to create a mutable reference to a DOM element or a value that persists across renders without causing a re-render.
- Mutable Reference:

  - useRef creates a mutable object that persists for the entire lifecycle of the component.
  - Unlike state variables, changing the value of a useRef variable does not trigger a re-render of the component.
- DOM References:

  - One common use case of useRef is to reference DOM elements directly within functional components.
  - You can attach a ref attribute to a JSX element and assign it the result of useRef. This allows you to manipulate the DOM element programmatically.
- Initial Value:

  - When creating a useRef variable, you can provide an initial value as an argument to useRef(initialValue).
  - The initial value can be any JavaScript value, such as null, undefined, an object, or a primitive value.
- Accessing DOM Elements:

  - After attaching a ref attribute to a JSX element, you can access the underlying DOM element using the current property of the useRef object.
  - For example, ref.current provides access to the DOM node associated with the ref.
- Persisting Values:

  - useRef can also be used to persist values across renders without causing re-renders.
  - Since changing the value of a useRef variable doesn't trigger a re-render, it's suitable for storing values that don't need to be part of the component state.
- Side Effects:

  - useRef is often used to store references to values or objects that should not trigger re-renders but may be used for side effects or imperative code, like error handling of forms input.

- Use Cases:

  - Accessing and manipulating DOM elements imperatively.
  - Storing values that need to persist across renders without causing re-renders <b>like render count</b>
  - Managing focus, text selection, or other imperative operations.
  - Storing mutable values that are not part of the component state <b>like error handling of input values</b>

## Storing mutable values that are not part of the component state like error handling of input values
- Suppose you're building a form validation feature in a React project. You might want to highlight input fields that have validation errors. Instead of adding a state variable for each input field to manage its error state, you can use useRef to store references to the input fields and manage their error state imperatively.
```js
import React, { useRef } from 'react';

const FormValidation = () => {
  // Refs for input fields
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const username = usernameRef.current.value;
    const email = emailRef.current.value;

    // Check username validity
    if (!username || username.trim() === '') {
      highlightField(usernameRef);
    }

    // Check email validity
    if (!email || !isValidEmail(email)) {
      highlightField(emailRef);
    }
  };

  // Function to highlight input fields with errors
  const highlightField = (ref) => {
    ref.current.style.border = '2px solid red';
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
```
- In this example:

  - We create useRef variables usernameRef and emailRef to store references to the username and email input fields, respectively.
  - When the form is submitted, we retrieve the values from the input fields using usernameRef.current.value and emailRef.current.value.
  - We perform validation checks on the input values and, if errors are found, we highlight the respective input fields by adding a red border using imperative DOM manipulation.
  - The highlightField function is used to apply styling to input fields with validation errors using the ref property.
- This approach allows us to manage mutable values (the input fields) imperatively without the need to store their state in React state variables <b>if we would have used stateVariable for input fields then that would caused too many re-renders which is not good for perfomance.</b>
