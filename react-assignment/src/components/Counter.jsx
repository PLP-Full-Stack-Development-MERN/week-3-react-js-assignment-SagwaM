import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>Counter</h2>
      <p className="count-display">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
