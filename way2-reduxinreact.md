## Way 2 : Implementing Redux in React
### Redux Architecture
![image](https://github.com/hiimvikash/react/assets/71629248/08701749-5c08-43ce-8467-f936c538118b)

#### Let me break down the above architecture 
Assume the counter App for simplicity, where you will have two two buttons ```increment``` and ```decrement```.

- **Step 1 :** In your UI layer you click ```increment``` button then ```onClick()``` attached to ```handler()```(function which runs when button is clicked) **will dispatch the action object** (stating what ```type``` of action needs to be performed)
  ```js
    import "./styles.css";
    import Counter from "./components/Count";
    import { useDispatch } from "react-redux";

    export default function App() {
      const dispatch = useDispatch();
      return (
        <div className="App">
          <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <Counter />
          <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </div>
      );
    }
  ```

- **Step 2 :** Now the action dispatched from handler function **can't directly update the state in the store**, so ```store``` sends that action object to ```reducer()```. 

- **Step 3:** ```reducer()``` will take the ```currState``` and ```action object``` then performs the operation based on the ```action.type```(INCREMENT or DECREMENT as dispatched by handler()) on ```currState``` and **returns the new State to the store.**
  - Here ```action.type``` is ```INCREMENT``` so it's returns new state to the store i.e., ```previousState + 1```

  ```Store.js```
  ```js
  import { createStore } from "redux";

  const reducer = (state = 0, action) => { // here initialState is 0
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };
  export const store = createStore(reducer); 
  ```

- **Step 4:** Now ASA state of the store is updated, then the components which are **subscribed to the store**,  updates there UI.

  ```Main.jsx``` : Subscribed to the store.
  ```js
  import { createRoot } from "react-dom/client";
  import { Provider } from "react-redux";
  import { store } from "./redux/store";
  import App from "./App";

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <react.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </react.StrictMode>
  );
  ```

  ```Counter.jsx``` : Updation of UI due to state change.
  ```js
  import React from "react";
  import { useSelector } from "react-redux";

  const Counter = () => {
    const count = useSelector((state) => state);
    return (
      <div>
        <h2>{count}</h2>
      </div>
    );
  };

  export default Counter;
  ```