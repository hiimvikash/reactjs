import { atom, useRecoilState, useRecoilValue, useSetRecoilState, atomFamily } from 'recoil';
import { useState } from 'react';

// Define an atom family for managing individual counter values
const counterStateFamily = atomFamily({
    key: 'counterState',
    default: (param) => param, // Initial value of each counter is the parameter itself
  });
  
  // Component to render a counter
  function Counter({ id }) {
    const [count, setCount] = useRecoilState(counterStateFamily(id));
  
    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };
  
    const decrement = () => {
      setCount((prevCount) => prevCount - 1);
    };
  
    return (
      <div>
        <h2>Counter {id}: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
  
  // Component to render multiple counters
  export default function App2() {
    const [counterIds, setCounterIds] = useState([1, 2, 3]); // IDs of counters
  
  
    const addCounter = () => {
      const newId = counterIds.length + 1;
      setCounterIds((prevIds) => [...prevIds, newId]);
    };
  
    return (
      <div>
        <h1>Counters</h1>
        {counterIds.map((id) => (
          <Counter key={id} id={id} />
        ))}
  
  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* change in sameid happen together: which shows that for a same atom is produced */}
      <Counter  id={1} />
      <Counter  id={2} />
      <Counter  id={2} />
  
        <button onClick={addCounter}>Add Counter</button>
      </div>
    );
  }