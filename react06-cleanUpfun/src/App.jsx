import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  // State to hold the counter value
  const [counter, setCounter] = useState(0);

  
  // Effect to set up an interval and update the counter
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    // Cleanup function: Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
      console.log('Interval cleared');
    };
  }, []); // Empty dependency array means the effect runs only on mount and unmount

  return (
    <div>
      <p>Counterd: {counter}</p>
    </div>
  );
};

export default CounterComponent;

