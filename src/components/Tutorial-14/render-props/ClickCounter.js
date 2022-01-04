import React from "react";

export default function ClickCounter({ count, handleCount }) {
  return (
    <div>
      <button type="button" onClick={handleCount}>
        Clicked {count} time
      </button>
    </div>
  );
}
