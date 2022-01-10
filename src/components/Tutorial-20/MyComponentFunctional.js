import React, { useEffect, useState } from "react";

export default function MyComponentFunctional() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const tick = () => {
    console.log("thick");
    setDate(new Date());
  };
  useEffect(() => {
    console.log("Called useEffect");
    document.title = `Clicked ${count} time`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("Component Unmount");
      clearInterval(interval);
    };
  }, []);
  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>{text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={addCount}>
        Click
      </button>
    </div>
  );
}
