import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  let i = 0;

  // This is wrong process
  //   const addFive = () => {
  // while (i < 5) {
  //   setCount(count + 1);
  //   i = i + 1;
  // }
  //   };

  // This right process. need use previus state with function call
  const addFive = () => {
    while (i < 5) {
      setCount((prevState) => prevState + 1);
      i = i + 1;
    }
  };
  return (
    <div>
      <p>Counts {count}</p>
      <p>
        <button
          type="button"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          Add 1
        </button>
        <button type="button" onClick={addFive}>
          Add 5
        </button>
      </p>
    </div>
  );
}
