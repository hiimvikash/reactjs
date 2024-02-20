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
  );
}
function App2() {
  return (
    <>
      <h1>I am App2</h1>
    </>
  );
}

export { App1, App2 };
// -----App.jsx END

// ------Main.jsx START

import React from "react";
import ReactDOM from "react-dom/client";
import { App1, App2 } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App1 />
    <App2 />
  </>
);

// ------Main.jsx END
```

# 02. Counter App

```js
//-------------------------------------------------------02. counter-app----------------------------------------------------------------

// App.jsx START

import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(12);

  function addCount() {
    setCounter(counter + 1);
  }
  function subCount() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h2>Count is {counter}</h2>
      <button onClick={addCount}>increase {counter}</button>
      <button onClick={subCount}>decrease {counter}</button>
    </>
  );
}

export default App;
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
- always use `setSomething` **inside some eventhandler** to avoid infinite loop
- [conditional-rendering](https://react.dev/learn/conditional-rendering)

# 06.useEffect() : whenever there is changed in dependencies CB fun inside useEffect() is called

- useEffect Hook: useEffect is a built-in React Hook used for handling side effects in functional components. Side effects may include data fetching, subscriptions, or manually changing the DOM.
- It accepts a function as its first argument and an optional array of dependencies as its second argument.
- The function represents the side effect to perform. The dependency array specifies when the effect should be executed based on changes in specific values.
- This side effect will now run on every single render of the component
  ```js
  useEffect(() => {
    console.log("This is a side effect");
  });
  ```
- If the dependency array is empty, the effect runs only once, after the initial render.
- this hook is used in fetching API with state change i.e., with different changing URL

  ```js
  import { useState, useEffect } from "react";

  function App() {
    let [resourceType, setResourceType] = useState("posts");
    let [items, setItems] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((res) => res.json())
        .then((json) => setItems(json));
    }, [resourceType]);

    return (
      <>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
        <h1>{resourceType}</h1>

        {items.map((item) => (
          <pre>{JSON.stringify(item)}</pre>
        ))}
      </>
    );
  }

  export default App;
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
  - Storing values that need to persist across renders without causing re-renders, <b>Eg - like render count</b>
    ```js
    function App() {
      let [msg, setmsg] = useState("hi");
      let rc = useRef(0);

      useEffect(() => {
        rc.current = rc.current + 1;
      });
      return (
        <>
          <input
            style={styles}
            type="text"
            value={msg}
            onChange={(e) => {
              setmsg(e.target.value);
            }}
          />
          <h3>The message is : "{msg}"</h3>
          <p> The render count is {rc.current}</p>
        </>
      );
    }
    ```
  - store history of state variable.
    ```js
    function App() {
      let [msg, setmsg] = useState("hi");
      let prevmsg = useRef(msg);

      useEffect(() => {
        prevmsg.current = msg;
      }, [msg]);
      return (
        <>
          <input
            style={styles}
            type="text"
            value={msg}
            onChange={(e) => {
              setmsg(e.target.value);
            }}
          />
          <h3>
            The message is : "{msg}" and the message was "{prevmsg.current}"
          </h3>
        </>
      );
    }
    ```
  - Managing focus, text selection, or other imperative operations.
  - Storing mutable values that are not part of the component state <b>like error handling of input values</b>

##### Storing mutable values that are not part of the component state like error handling of input values

- Suppose you're building a form validation feature in a React project. You might want to highlight input fields that have validation errors. Instead of adding a state variable for each input field to manage its error state, you can use useRef to store references to the input fields and manage their error state imperatively.

```js
import React, { useRef } from "react";

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
    if (!username || username.trim() === "") {
      highlightField(usernameRef);
    }

    // Check email validity
    if (!email || !isValidEmail(email)) {
      highlightField(emailRef);
    }
  };

  // Function to highlight input fields with errors
  const highlightField = (ref) => {
    ref.current.style.border = "2px solid red";
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

- This approach allows us to manage mutable values (the input fields) imperatively without the need to store their state in React state variables <b>if we would have used state-variable for input fields then that would caused too many re-renders which is not good for perfomance.</b>

# 08. useMemo() hook

- To identify the problem see the below code :-

  ```js
  function App() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const dn = slowFunction(number);

    const styleTheme = {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };

    function changeTheme() {
      setDark(!dark);
    }

    // problem 2 : start (consider this after solving 1st problem)
    useEffect(() => {
      console.log("Theme changed");
    }, [styleTheme]);
    // problem 2 : end

    return (
      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={changeTheme}>Change Theme</button>
        <h1 style={styleTheme}>{dn}</h1>
      </>
    );
  }

  function slowFunction(num) {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }
  export default App;
  ```

  #### Problem 1 :-

  - Here in the above application the problem is <b>Even if we change the theme it start re-rendering from top to bottom and our slowfun() is called</b> which is wrong bcz <b>return of slowFun() only depend on `number`</b>.
  - Due to this even theme changing delays to effect.

  #### Solution 1 :-

  - initialize dn like this `const dn = useMemo(()=>slowFunction(number), [number])`.
  - here slowFuntion will return integer and will be stored in `dn`.
  - useMemo(callbackFun, dependenciesArray[]) it will only execute CB() when there is change in dependency.
  - so now problem is solved : <b>it will cached the memonised value, slowFunction will be executed only when there is change in dependency `number` to recalculate the memonised value.</b>

  #### Problem 2 :-

  - If you're implementing useEffect() for dependency like arrays or object then <b>CB() inside useEffect is rendered every single time</b>, this is bcz <b>each time when component re-render arrays and objects are initialized to new memory location</b> so for useEffect() it feels like dependency is changed.
  - Due to above problem useEffect() will run even when we change other state-variable.

  #### Solution 2 :-

  - We will wrap returning object inside useMemo CB() and pass the dependency as `dark`(state-variable).
  - If we do this then newObject will be return only when there is change in `dark` else it will have the memonised object.
  - so useEffect CB() will execute only when there is <b>change in object-reference</b> and change in object-reference is possible only when there is change in `dark`.
  - which means useEffect CB() will be called only when there is change in `dark`, which we wanted.

    ```js
    const styleTheme = useMemo(() => {
      return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      };
    }, [dark]);

    useEffect(() => {
      console.log("Theme changed");
    }, [styleTheme]);
    ```

# 09. Working with lists and Arrays in JSX - [rendering-lists](https://react.dev/learn/rendering-lists)

### Example 1 :-

#### Make a list of recipes from this array! For each recipe in the array, display its name as an h2 and list its ingredients in a ul

```js
const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

export default function RecipeList() {
  const listItems = recipes.map((recipe, idx) => (
    <li key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
```

### Example 2 :-

#### Here we will have `products.json`, we will see how we pass each productDetails to a component as props and that component returns the individual card for each product.

##### `Products.json`

```js
[
  {
    id: 1,
    productName: "Nantucket Pine Orangebanana",
    image: "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
    price: 229,
  },
  {
    id: 2,
    productName: "Quiche Assorted",
    image: "http://dummyimage.com/126x100.png/5fa2dd/ffffff",
    price: 199,
  },
  {
    id: 3,
    productName: "Pork - Kidney",
    image: "http://dummyimage.com/221x100.png/5fa2dd/ffffff",
    price: 296,
  },
  {
    id: 4,
    productName: "Beef - Ground Lean Fresh",
    image: "http://dummyimage.com/204x100.png/dddddd/000000",
    price: 197,
  },
];
```

##### `App.jsx`

```js
import products from "./products.json";
import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
```

#### `Product.jsx` Here we return a card from each productDetails

```js
import React from "react";
const Product = (props) => {
  return (
    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        T<h5 class="card-title">{props.productName}</h5>
        <p class="card-text">Rs. {props.price}/-</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
};
export default Product;
```

# 10. useCallback()

- useMemo(): Returns and stores the calculated value of a function in a variable.
- useCallBack(): Returns and stores the actual function itself in a variable.

  ```js
  function App() {
    const [num, setNum] = useState(1);
    const [dark, setDark] = useState(false);

    // getItems will get the full CB(), due to useCallback the refrencial equality will not change untill unless num is changed
    const getItems = useCallback(() => {
      return [num, num + 1, num + 2];
    }, [num]);

    const theme = {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
    return (
      <div style={theme}>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value))}
        />
        <button onClick={() => setDark(!dark)}>Toggle theme</button>
        <List getItems={getItems} />
      </div>
    );
  }

  function List({ getItems }) {
    const [items, setItems] = useState([]);

    // here if I don't implement setItems inside useEffect() then it will cause infinite re-render
    useEffect(() => {
      console.log("getting items");
      setItems(getItems());
    }, [getItems]);

    return items.map((item, i) => <div key={i}>{item}</div>);
  }
  export default App;
  ```

# 11. Password Generator Project

- ##### To generate random text of a particular length from a string of characters in JavaScript, you can follow these steps:

  - Math.random() generates number from [0,1) i.e., min is `0` and max is `0.99999999`.
  - let's say charaters string is of length 52 therefore available index is from `0` to `51`.
  - so we want our `randomIndex` to be a available index.
  - `charcterLength*Math.Random` will always be inclusive 51.9999999 and 52 is impossible coz <b>Math.random() is generating number below 1.</b>

  ```js
  function generateRandomText(length, characters) {
    let result = ""; // Initialize an empty string to store the generated text

    for (let i = 0; i < length; i++) {
      // Generate a random index within the length of the characters string
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex); // Append the character at the random index to the result string
    }

    return result; // Return the generated random text
  }
  ```

- #### Actual project code

  ![image](https://github.com/hiimvikash/react/assets/71629248/7ace8879-9cd8-4d61-99ef-9b8d4ea10667)

  ```js
  import { useEffect, useState, useRef } from "react";
  import "./App.css";
  function App() {
    let [pwd, setPwd] = useState();
    let [incNum, setIncNum] = useState(false);
    let [incSpc, setIncSpc] = useState(false);
    let [length, setLength] = useState(20);
    let pwdref = useRef(null);

    useEffect(() => {
      setPwd(generatePassword(length, incNum, incSpc));
    }, [incNum, incSpc, length]);

    function handleCopy() {
      window.navigator.clipboard.writeText(pwd);
      pwdref.current.select();
    }

    return (
      <>
        <div className="upper">
          <input type="text" value={pwd} ref={pwdref} />
          <button onClick={handleCopy}>Copy</button>
        </div>
        <div>
          <label htmlFor="">length :{length}</label>
          <input
            type="range"
            min={10}
            max={30}
            defaultValue={20}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">Numbers</label>
          <input type="checkbox" onChange={(e) => setIncNum(!incNum)} />
          <label htmlFor="">Special Character</label>
          <input type="checkbox" onChange={(e) => setIncSpc(!incSpc)} />
        </div>
      </>
    );
  }

  function generatePassword(length, incNum, incSpc) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let password = "";
    if (!incNum && !incSpc) {
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
      }
    } else if (!incSpc) {
      chars += "1234567890";
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
      }
    } else if (!incNum) {
      chars += "{)(&*^%$#@}!";
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
      }
    } else {
      chars += "1234567890{)(&*^%$#@}!";
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
      }
    }
    return password;
  }

  export default App;
  ```

# 12. Currency Convertor Project

![image](https://github.com/hiimvikash/react/assets/71629248/c2b8c8c5-f4c7-4b9f-8fdf-a9145758f16b)
![image](https://github.com/hiimvikash/react/assets/71629248/dbaa7279-72c4-4c52-b14d-1337f132b920)

- `useCurrencyInfo.js` is a <b>hook</b>(assume it as function) which take input as the Fromcurrency and gives the conversion-rate for other currency [click here for API](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json).
- `InputBox.jsx` is a component which contains `label`, `input`, & `selection`.

  #### useCurrencyInfo.js

  ```js
  import { useEffect, useState } from "react";
  function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
    }, [currency]);
    console.log(data);
    return data;
  }

  export default useCurrencyInfo;
  ```

  #### App.jsx

  ```js
  import { useState } from "react";
  import { InputBox } from "./components/InputBox";
  import useCurrencyInfo from "./hooks/useCurrencyInfo";
  import "./App.css";

  function App() {
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState();

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          setAmount={(amount) => setAmount(amount)}
          selectedCurrency={from}
        />

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
          amountDisable
          placeholder="Converted Amount"
        />

        <button type="submit">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    );
  }

  export default App;
  ```

  #### InputBox.jsx

  ```js
  import React, { useId } from "react";

  export function InputBox({
    label,
    amount,
    setAmount,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    placeholder = "Enter Amount",
  }) {
    const amountInputId = useId();
    const style = {
      border: "2px solid #055267aa",
      marginTop: "10px",
      borderRadius: "10px",
      padding: "20px",
    };
    return (
      <div style={style}>
        <div>
          <label htmlFor={amountInputId}>{label}</label>
          <input
            id={amountInputId}
            type="number"
            placeholder={placeholder}
            disabled={amountDisable}
            value={amount}
            onChange={(e) => setAmount && setAmount(parseInt(e.target.value))}
          />
        </div>

        <p>Currency Type</p>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    );
  }
  ```

  <hr/>

# 13. React-Router

[video](https://youtu.be/oTIJunBa6MA?si=M02AWnspNt-VoJcJ)

- React Router is a library for React.js that helps you manage navigation and routing in your web applications.

- In simpler terms, imagine your React application is like a house with many rooms (components). React Router acts like <b>signs and pathways within the house, guiding users from one room to another based on the URL they visit or the actions they take.</b> It allows you to define different routes, such as "/home", "/about", or "/contact", <b>and specify which React components should render when users visit those routes.</b>

- With React Router, you can create single-page applications (SPAs) where the page doesn't reload entirely when users navigate between different sections of your app.

## Now after following the below steps you will be able to `navigate to different URL and render your particular page-component without refreshing the page` + You will be able to `handle invalid path` 😄.

## Note : Rendering of page without refreshing is only possible when you use NavLinks to navigate to other URL. If you're changing URL for navigation then it will cause refresh obviously.

#### Step 1 : install react-router-dom in your Project

`npm i react-router-dom`

#### Step 2 : create the page-components and import them at the top of main.jsx

![image](https://github.com/hiimvikash/react/assets/71629248/97793ce9-7aaa-434a-a970-ff85f504879a)

- `<NavLink>` is same as `a` tag, only difference are it <b>dont refresh the page</b> while navigating to other path and it allows us to apply <b>style on active links.</b>
  ```js
  <NavLink
    to="/profiles/1"
    style={({ isActive }) => {
      return {
        color: isActive ? "red" : "",
        backgroundColor: "yellow",
      };
    }}
  >
    profile 1
  </NavLink>
  ```

#### Step 3 : changes in `Main.jsx`

- imports from react-router-dom
  ```js
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  ```
- calling <b>createBrowserRouter</b> function and storing the reference in some variable.
  - createBrowserRouter <b>creates different path(end-url)</b> for rendering different components.
  - Argument passed is <b>a array of objects-routes</b>
  - a object-route contains keys like `path`, `element` (page to render when particular path is hit), `errorElement`(to render error page when invalid path is hit)

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUS />,
  },
]);
```

- Now render the `RouterProvider` component and pass the `router`(containing <b>When to render</b> and <b>What to render</b>) inside <b>router props</b>
  ```js
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  ```

## Here we will learn `dynamic paths`

![image](https://github.com/hiimvikash/react/assets/71629248/e0855460-33e7-4f43-a428-9f5016c8ecc1)

- In above URL `leetcode.com/problemset` is coded.
- when you select a Q from the given list of thousands Qs, the URL changes to something like : `leetcode.com/problemset/two-sum` or `leetcode.com/problemset/palindrome-number`.
- and the page which renders is of same layout(Left-Side is Q describtion, Right-Side is code editor, Bottom is console...)

### So what do you think 🤔 did they coded manually the paths for thousands of Qs ?

ofc no. so Here comes the <b>dynamic paths.</b>

#### Step 4 : setup like this :

![image](https://github.com/hiimvikash/react/assets/71629248/ad493f6f-4446-48d7-a07e-1a704e0a1c7a)

- Here highlighted thing in createBrowserRouter is called `params` which says : <b>Whenever user hit to `/profiles/[anything]` then `<Profile/>` will be rendered.</b>
- In `<Profile/>` page-component, we are importing `useParams` and then extracting the `[anything]` of URL.
- `useParams()` gives the object containing `{profileID:1}` so we extracted that and used further.
- `<Profiles/>` is just containing similar `<NavLink to='/profiles/1'> profile 1 </NavLink>`

### Problem : NavLinks are in `/profiles` only so when we reach to `/profiles/4` then we again need to travel back to `/profiles` to get NavLinks.

### Solution :-

- Here you're telling that whenever URL is hit @ `/profiles/[anything]` then `<Profile/>` will be render in `<Profiles/>`
  ```js
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactUS />,
    },
    {
      path: "/profiles",
      element: <Profiles />,
      children: [
        {
          path: "/profiles/:profileID",
          element: <Profile />,
        },
      ],
    },
  ]);
  ```
- Now when you click on the NavLink you will notice URL only changes and page remains constant, but `<Profile/>` is not rendered.
- this is because you need to specify the placeholder in `<Profiles/>` where you want to render your `<Profile/>` page.
- this can be achived using `<Outlet/>`.

##### Profiles.jsx

```js
import { NavLink, Outlet } from "react-router-dom";
export function Profiles() {
  const Navstyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "25px",
  };

  const mainStyle = {
    display: "flex",
    gap: "10%",
  };

  return (
    <div style={mainStyle}>
      <div style={Navstyle}>
        <NavLink to="/profiles/1">profile 1</NavLink>
        <NavLink to="/profiles/2">profile 2</NavLink>
        <NavLink to="/profiles/3">profile 3</NavLink>
        <NavLink to="/profiles/4">profile 4</NavLink>
        <NavLink to="/profiles/5">profile 5</NavLink>
      </div>

      <Outlet />
    </div>
  );
}
```

## SOME OTHER WAYS TO visualise createBrowserRouter.

### Way 1 :

- component which may remain constant throughout the websites are : navbar and footer.
- Here `<Layout/>` is like parentPage containing that component which remain constant and will render in everypage like Home, About, Contact.
  ##### Layout.jsx
  ```js
  import React from "react";
  import Header from "./components/Header/Header";
  import Footer from "./components/Footer/Footer";
  import { Outlet } from "react-router-dom";

  function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

  export default Layout;
  ```
  ##### Main.jsx
  ```js
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "user/:userID",
          element: <User />,
        },
      ],
    },
  ]);
  ```

## Final Way : (Final way to implement)

#### Main.jsx

```js
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<NotFound />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUS />} />
      <Route path="profiles" element={<Profiles />}>
        <Route path=":profileID" element={<Profile />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<GitHub />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

#### Layout.jsx

```js
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  const Navstyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "25px",
  };

  const mainStyle = {
    display: "flex",
    gap: "10%",
  };

  return (
    <div style={mainStyle}>
      <div style={Navstyle}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
        <NavLink to="/profiles">profiles Link</NavLink>
        <NavLink to="/github">Github</NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
```

#### Profiles.jsx

```js
import { NavLink, Outlet } from "react-router-dom";
export function Profiles() {
  const Navstyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "25px",
  };

  const mainStyle = {
    display: "flex",
    gap: "200px",
  };

  return (
    <div style={mainStyle}>
      <div style={Navstyle}>
        <NavLink to="/profiles/1">profile 1</NavLink>
        <NavLink to="/profiles/2">profile 2</NavLink>
        <NavLink to="/profiles/3">profile 3</NavLink>
        <NavLink to="/profiles/4">profile 4</NavLink>
        <NavLink to="/profiles/5">profile 5</NavLink>
      </div>

      <Outlet />
    </div>
  );
}
```

#### Profile.jsx

```js
import { useParams } from "react-router-dom";

export function Profile() {
  const id = useParams().profileID;

  return (
    <>
      <h1>I m in profile {id}</h1>
    </>
  );
}
```

#### Github.jsx

```js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  // const {user} = useParams();

  // const [data, setData] = useState({});
  // useEffect(()=>{
  //     fetch(`https://api.github.com/users/${user}`)
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, [])

  const data = useLoaderData();
  return <h1> Github followers : {data.followers}</h1>;
}
export default GitHub;

const githubInfoLoader = async function () {
  const res = await fetch(`https://api.github.com/users/hiimvikash`);
  return res.json();
};
export { githubInfoLoader };
```

# 14. Context API

The React Context API is a feature in React that **allows you to manage global state and share data between components** without having to pass props manually through every level of the component tree. Here's how it works :-

1. **Provider:** The Context API provides a Provider component which wraps around the part of your component tree where you want to share data. It accepts a value prop which represents the data you want to share.

1. **Consumer:** Components that need access to the shared data can subscribe to the context using the Consumer component or by using the useContext hook (introduced in React 16.8). This allows them to access the data provided by the Provider higher up in the component tree.

### Example 1 :

In this example, **ChildComponent** is able to access the value "Hello from Context" provided by the **MyContext.Provider** component without the need for prop drilling.

```js
// Create a new context
const MyContext = React.createContext();

// Wrap your application with the Provider
function App() {
  return (
    <MyContext.Provider value="Hello from Context">
      <ChildComponent />
    </MyContext.Provider>
  );
}

// ChildComponent consuming the context
function ChildComponent() {
  // Using useContext hook to access context
  const valueFromContext = useContext(MyContext);
  return <div>{valueFromContext}</div>;
}
```

### Example 2 :

Here's a more elaborate example of using the React Context API to manage a theme in a React application:

#### ThemeContext.jsx

```js
import React, { createContext, useState, useContext } from "react";

// 1. create a new context
const ThemeContext = createContext();

// 2. Set-up your Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. custom hook to Consume ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}
```

In this example:

- We create a new context called ThemeContext using createContext.
- We create a ThemeProvider component that wraps the entire application and provides the theme state and a function to toggle the theme.
- The toggleTheme function changes the theme between 'light' and 'dark' modes.
- We define a custom hook useTheme to access the theme context.

Now, let's use this context in our components:

#### Header.jsx

```js
import { useTheme } from "./contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <h1>Demonstration of Context API</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}
```

#### Content.jsx

```js
import { useTheme } from "./contexts/ThemeContext";

export default function Content() {
  const { theme } = useTheme();

  return (
    <>
      <p
        style={{
          backgroundColor: theme === "dark" ? "#0e414d" : "#f1fcff",
          color: theme === "dark" ? "#f1fcff" : "#0e414d",
          transition: "all 0.3s ease-out",
          padding: "1.5em",
          borderRadius: "0.5em",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        accusantium error, explicabo aut minima corrupti. Blanditiis dolor sit
      </p>
    </>
  );
}
```

#### App.jsx

```js
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./Header";
import Content from "./Content";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
```

### Example 3 :

- [todoApp using Context-API + Local Storage](https://github.com/hiimvikash/react/tree/main/react11-todoApp)

# 15. Redux-toolkit

## What is Redux ?

**A Predictable State Container for JS Apps.**
Certainly! Let's break down the concept into simple points:


- **Predictable:** Redux provides a predictable state management pattern. In redux, a pattern is enforced to ensure all state transitions are explicit and can be tracked.

  - Explicit State Transitions: In Redux, any change to the application's state must be done explicitly through actions. These actions are simple JavaScript objects that describe what happened in the application (like a user clicking a button or fetching data from a server).

  - Tracking State Changes: Since all changes to the state are made through actions, Redux provides a clear history of how the state has changed over time. This makes it easier to debug and understand how your application's data evolves in response to user interactions or other events.

  - Immutable State Updates: Redux encourages immutability, which means that you should never directly modify the existing state. Instead, you create a new state object every time something changes, based on the previous state and the action that occurred. This ensures that the state remains predictable and easy to manage.

  Overall, Redux's pattern of explicit state transitions and tracking ensures that your application's state changes are well-defined, traceable, and manageable. It promotes a structured approach to managing state, which leads to more predictable behavior and easier debugging in large-scale applications.

- **State Container:** Redux acts as a central container for storing and managing the state of an application. Instead of scattering state management logic throughout the application components, Redux provides a single source of truth for the state, prevents props drilling in react.

- **JavaScript Apps:** Redux is not tightly bound with react only, it's an independent state management library designed for JavaScript applications. It can be used with various JavaScript frameworks and libraries, such as React, Angular, or Vue.js, to manage state in a consistent and efficient manner. 

- Actions and Reducers:
Redux uses actions and reducers to manage state changes. Actions are plain JavaScript objects that describe what happened in the application, while reducers are functions that specify how the application's state changes in response to actions.

- Immutable Updates:
Redux promotes immutable updates to the state. Instead of directly modifying the existing state, reducers create a new copy of the state with the desired changes applied. This ensures that the state remains predictable and does not get mutated unintentionally.

## Way 1 : Implementing Redux in node

### Three Principles
- **First Principle :** "The global state of your application is stored as an object inside a single store"  

  - Maintain our application state in a single object which would be managed by the Redux store
  - Cake Shop - Let's assume we are tracking the number of cakes on the shelf.
  ```
  {
  numberOfCakes: 10
  }
  ```

- **Second Principle :** "The only way to change the state is to dispatch an action, an object that describes what happened"
  - To update the state of your app, you need to let Redux know about that with an action
  - Not allowed to directly update the state object
  - In Cake Shop you Scan the QR code and place an order - CAKE_ORDERED, you don't cross the shelf and take the cake by yourself right ?
  ```
  {
  type: 'CAKE_ORDERED'
  }
  ```

- **Third Principle :** "To specify how the state tree is updated based on actions, you write pure reducers"
  - Reducer is (previousState, action) => newState
  - In Cake Shop Reducer is the shopkeeper

![image](https://github.com/hiimvikash/react/assets/71629248/a60422a5-da35-416d-8ac6-bf0b5a3b2314)

- A store that holds the state of your application.
- An action that describes what happened in the application.
- A reducer which handles the action and decides how to update the state.
- A dispatcher which sends your action to reducer

![image](https://github.com/hiimvikash/react/assets/71629248/fb219000-1022-4f88-a127-9112dacbad9a)
- 1 Shop -> 1 store
- 1 cake initial state
- 1 cake shopkeeper -> 1 reducer() for cake
- 2 typeof customer action -> 2 action creator
#### ```index1.js```
```js
const redux = require('redux')

// create initial state of your store(shop)
const initialState = {
    numOfCakes : 10
}

// create action creator : action is nothing but an object with type property
function orderCake(n=1){
    return {
        type : 'CAKE_ORDERED',
        quantity : n
    }
}
function restockCake(n=1){
  return {
        type : 'CAKE_RESTOCKED',
        quantity : n
    }
}

// create reducer : is like a shopkeeper
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'CAKE_ORDERED' : return {
            ...state, 
            numOfCakes : state.numOfCakes - action.quantity
        }

        case 'CAKE_RESTOCKED' : return {
          ...state, 
          numOfCakes : state.numOfCakes + action.quantity
        }
        default : return state
    }
}

// create store
const store = redux.createStore(reducer);

console.log("Initial State", store.getState());

// this function runs whenever state is updated basically you're subscribed and you will get an update
// and returns a function which is when called then you unsubscribe.
const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState())
})

store.dispatch(orderCake(2));
store.dispatch(orderCake());
store.dispatch(orderCake(3));
store.dispatch(restockCake(3));

unsubscribe();

store.dispatch(orderCake()); // this will not call the subscribe CB on state change
console.log("unsub", store.getState()) 
```
![image](https://github.com/hiimvikash/react/assets/71629248/5a166175-08fa-4e80-bf66-a40e3c6a5d8f)

**Alternative way to dispatch by binding actionCreator**
```js
  const actions = redux.bindActionCreators({ orderCake, restockCake }, store.dispatch)
  actions.orderCake()
  actions.orderCake()
  actions.orderCake()
  actions.restockCake(3)
```



- 1 Shop -> 1 store
- 2 initial state (cake & icecream)
- 2 shopkeeper(cake & icecream) & -> 2 reducer() for cake & icecream
- 4 typeof customer action -> 4 action creator
#### ```index2.js```
```js
const redux = require('redux')

// create initial state of your store(shop)
const cakeinitialState = {
    numOfCakes : 10
}
const icreaminitialState = {
    numOfIcream : 20
}

// create action creator : action is nothing but an object with type property
function orderCake(n=1){
    return {
        type : 'CAKE_ORDERED',
        quantity : n
    }
}
function restockCake(n=1){
  return {
        type : 'CAKE_RESTOCKED',
        quantity : n
    }
}
function ordericream(n=1){
    return {
        type : 'ICREAM_ORDERED',
        quantity : n
    }
}
function restockicream(n=1){
  return {
        type : 'ICREAM_RESTOCKED',
        quantity : n
    }
}

// create reducer : is like a cake shopkeeper
const cakereducer = (state = cakeinitialState, action)=>{
    switch(action.type){
        case 'CAKE_ORDERED' : return {
            ...state, 
            numOfCakes : state.numOfCakes - action.quantity
        }

        case 'CAKE_RESTOCKED' : return {
          ...state, 
          numOfCakes : state.numOfCakes + action.quantity
        }
        default : return state
    }
}
// create reducer : is like a icecream shopkeeper
const icreamreducer = (state = icreaminitialState, action)=>{
    switch(action.type){
        case 'ICREAM_ORDERED' : return {
            ...state, 
            numOfIcream : state.numOfIcream - action.quantity
        }

        case 'ICREAM_RESTOCKED' : return {
          ...state, 
          numOfIcream : state.numOfIcream + action.quantity
        }
        default : return state
    }
}

// combine reducer coz we can pass 1 reducer in store
const rootreducer = redux.combineReducers({
  cake : cakereducer,
  icecream : icreamreducer
})

// create store
const store = redux.createStore(rootreducer);

console.log("Initial State", store.getState());

// this function runs whenever state is updated basically you're subscribed and you will get an update
// and returns a function which is when called then you unsubscribe.
const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState())
})

// store.dispatch(orderCake(2));
// store.dispatch(orderCake());
// store.dispatch(orderCake(3));
// store.dispatch(restockCake(3));
const actions = redux.bindActionCreators({ orderCake, restockCake, ordericream, restockicream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

actions.ordericream()
actions.ordericream()
actions.ordericream(2)
actions.restockicream()

unsubscribe();
```
#### ```output```
```js
PS D:\react-git\react12-reduxRaw> node index1
Initial State { cake: { numOfCakes: 10 }, icecream: { numOfIcream: 20 } }
Updated State { cake: { numOfCakes: 9 }, icecream: { numOfIcream: 20 } }
Updated State { cake: { numOfCakes: 8 }, icecream: { numOfIcream: 20 } }
Updated State { cake: { numOfCakes: 7 }, icecream: { numOfIcream: 20 } }
Updated State { cake: { numOfCakes: 10 }, icecream: { numOfIcream: 20 } }
Updated State { cake: { numOfCakes: 10 }, icecream: { numOfIcream: 19 } }
Updated State { cake: { numOfCakes: 10 }, icecream: { numOfIcream: 18 } }
Updated State { cake: { numOfCakes: 10 }, icecream: { numOfIcream: 16 } }
Updated State { cake: { numOfCakes: 10 }, icecream: { numOfIcream: 17 } }
PS D:\react-git\react12-reduxRaw> 
```


## What is Redux-toolkit ?

Redux is great, but it does have a few shortcomings

- Configuring redux in an app seems complicated
- In addition to redux, a lot of other packages have to be installed to get redux to do something useful
- Redux requires too much boilerplate code.

Redux toolkit serves as an abstraction over redux. It hides the difficult parts ensuring you have a
good developer experience.

Some points to 🧹 your 🧠

- React is a library used to build user interfaces
- Redux is a library for managing state in a predictable way in JavaScript
  applications
- Redux toolkit is a library for efficient redux development
- React-redux is a library that provides bindings to use React and Redux (Toolkit) together in an application

### 1 : ```index1.js``` --> ```redux-toolkit```
- Here we're rebuilding our cake shop from ```rtk```
![alt text](redux-rtk.png)
#### ```output```

```js
PS D:\react-git\react13-rtkRaw> node index
Initial state  { cake: { numOfCakes: 10 } } // "cake" is the name given in store
Updated state  { cake: { numOfCakes: 9 } }
Updated state  { cake: { numOfCakes: 8 } }
Updated state  { cake: { numOfCakes: 7 } }
Updated state  { cake: { numOfCakes: 10 } }
PS D:\react-git\react13-rtkRaw> cd..
PS D:\react-git> cd react12-reduxRaw
PS D:\react-git\react12-reduxRaw> node index
Initial State { numOfCakes: 10 }
Updated State { numOfCakes: 8 }
Updated State { numOfCakes: 7 }
Updated State { numOfCakes: 4 }
Updated State { numOfCakes: 7 }
unsub { numOfCakes: 6 }
```

### 2: [```index2.js``` --> ```redux-toolkit```](https://github.com/hiimvikash/react/tree/main/react13-rtkRaw)
- Here we're adding icecreams in our shop
#### ```output```
```js
PS D:\react-git> cd react13-rtkRaw
PS D:\react-git\react13-rtkRaw> node index
Initial state  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
Updated state  { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
Updated state  { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
Updated state  { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
Updated state  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
Updated state  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 19 } }
Updated state  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 18 } }
Updated state  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }
Updated state  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
PS D:\react-git\react13-rtkRaw> 
```

### 3 : Add logger MiddleWare
```store.js```
```js
const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice")

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream : icecreamReducer
  },
  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

});
module.exports = store;
```
```output```
```js
PS D:\react-git\react14-rtkRaw-MW> node index
Initial state  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
 action cake/ordered @ 13:34:09.039
   prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
 action cake/ordered @ 13:34:09.043
   prev state { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
 action cake/ordered @ 13:34:09.044
   prev state { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
 action cake/restocked @ 13:34:09.045
   prev state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'cake/restocked', payload: 3 }
   next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
 action icecream/ordered @ 13:34:09.046
   prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'icecream/ordered', payload: undefined }
   next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 19 } }
 action icecream/ordered @ 13:34:09.048
   prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 19 } }
   action     { type: 'icecream/ordered', payload: undefined }
   next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 18 } }
 action icecream/ordered @ 13:34:09.050
   prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 18 } }
   action     { type: 'icecream/ordered', payload: undefined }
   next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }
 action icecream/restocked @ 13:34:09.053
   prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }
   action     { type: 'icecream/restocked', payload: 3 }
   next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
PS D:\react-git\react14-rtkRaw-MW>
```

### 4. Add the functionality - ```Whoever takes the cake get one icecream free```.

- In ```redux``` you implemented like, here you're just listening cakeActions and reducing Icecream from stock :- 

```js
  // .............edited from index2.js
  // create reducer : is like a icecream shopkeeper
  const icreamreducer = (state = icreaminitialState, action)=>{
    switch(action.type){
        case 'ICREAM_ORDERED' : return {
            ...state, 
            numOfIcream : state.numOfIcream - action.quantity
        }

        case 'ICREAM_RESTOCKED' : return {
          ...state, 
          numOfIcream : state.numOfIcream + action.quantity
        }

        case 'CAKE_ORDERED' : return {
            ...state, 
            numOfIcream : state.numOfIcream - 1
        }

        default : return state
    }
  }
```
- extraReducers allows createSlice to respond and update its own state in response to other action types besides the types it has generated.
- Notice the logged output of step 3, there you will notice ```action.type = "cake/ordered", "icecream/ordered"``` : ```nameOfSlice/reducer()```
- ![image](https://github.com/hiimvikash/react/assets/71629248/6956b229-9460-425a-a4ea-de2fac42f058)
- The extraReducers option should be a function that receives a parameter called builder. The builder object provides methods that let us define additional case reducers that will run in response to actions defined outside of the slice.
- In ```rtk``` you modify your ```icecreamSlice.js``` like :-

```js
const cakeActions = require("../cake/cakeSlice").cakeActions;

const icecreamSlice = createSlice({
    name : "icecream",
    initialState : {
        numOfIcecreams : 20
    },
    reducers : {
        ordered : (state)=>{
            state.numOfIcecreams--;
        },
        restocked : (state, action)=>{
            state.numOfIcecreams+=action.payload;
        }
    },

    extraReducers : (builder) => {
        builder.addCase(cakeActions.ordered, (state) =>{
            state.numOfIcecreams--
        })
    }
});
```
  ```output```
  ```js
  Node.js v20.11.0
  PS D:\react-git\react13-rtkRaw> node index
  Initial state  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
  Updated state  { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 19 } }
  Updated state  { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 18 } }
  Updated state  { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 17 } }
  ```
### 5. API calling
- Reducers should be pure functions that take the previous state and an action, and return the next state. They should not have side effects like making API calls.
- so In ```rtk``` we do API calling in ```createAsyncThunk```
- ```createAsyncThunk``` is a **action creator**.
- It takes two arguments: a string typePrefix and an async callback function. The ```typePrefix``` is a string that serves as a prefix for the action types dispatched by the thunk action creator.
- createAsyncThunk accepts a "payload creator" callback that should return a Promise, and generates pending/fulfilled/rejected action types automatically


```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    loading : false,
    users : [],
    error : ""
}
// dispatch(fetchUser()) ---> this will initiate API call and dispatch actions like "fetchme/pending"
export const fetchUser = createAsyncThunk("fetchme", async ()=>{ // "fetchme" can be anything it is used as a actionType prefix
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
})
const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder)=>{
        
        builder.addCase('fetchme/pending', (state)=>{ // this are the actions type created by asyncThunk
            state.loading = true;
        }),
        builder.addCase('fetchme/rejected', (state, action)=>{
            state.loading = false;
            console.log(action.payload)
            state.error = "404 not fetched"
        }),
        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            console.log(action.type) // fetchme/fulfilled
            state.loading = false;
            state.users = action.payload
        })
    }
})
export default userSlice.reducer
```

### [6. Making cake and Icecream shop in react using rtk](https://github.com/hiimvikash/react/tree/main/react15-reactrtk)
