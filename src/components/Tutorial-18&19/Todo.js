import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes(".js")
      ? "You need javascript skill"
      : null;
    setTodo(inputValue);
    setWarning(updatedWarning);
  };
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleChange} />
      </p>
      <h2>{warning || "Goodluck"}</h2>
    </div>
  );
}
