import React, { useState, useMemo } from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  // Memoize the squared value of the counter
  const squaredValue = useMemo(() => {
    // console.log('Calculating squared value...');
    return counter ** 2;
  }, [counter]);

   console.log("counter",counter)

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter: {counter}</p>
      <p>Squared Value: {squaredValue}</p>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)} disabled={counter === 0}>
        Decrement
      </button>
    </div>
  );
};

export default CounterApp;
