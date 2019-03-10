import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p>
        Current count: <strong>{count}</strong>
      </p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
