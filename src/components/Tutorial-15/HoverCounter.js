import React from "react";

export default function HoverCounter({ count, handleCount, theme }) {
  const style =
    theme === "dark" ? { backgroundColor: "purple", color: "white" } : null;
  return (
    <div>
      <h1 style={style} onMouseOver={handleCount}>
        Hovered {count} time
      </h1>
    </div>
  );
}
