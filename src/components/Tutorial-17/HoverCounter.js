import React from "react";

export default function HoverCounter({ count, handleCount }) {
  const style = {
    padding: "5px 13px",
    backgroundColor: "purple",
    color: "white",
    borderRadius: "5px",
  };
  console.log("HoverCounter Rendered");
  return (
    <div>
      <h1>This is Hover Counter</h1>

      <h1 onMouseOver={handleCount}> Hovered {count} times</h1>
      <button type="button" style={style} onClick={handleCount}>
        Count
      </button>
    </div>
  );
}
