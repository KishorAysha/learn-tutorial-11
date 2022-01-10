import React, { useState } from "react";

export default function Todo2() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const { title, description } = todo;
  return (
    <div>
      <p>{title}</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <hr />
      <textarea
        name="todo"
        value={description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
    </div>
  );
}
