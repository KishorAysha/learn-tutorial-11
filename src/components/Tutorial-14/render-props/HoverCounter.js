import React from "react";

export default function HoverCounter({ count, handleCount }) {
  return (
    <div>
      <h1 onMouseOver={handleCount}>Hovered {count} time</h1>
    </div>
  );
}
